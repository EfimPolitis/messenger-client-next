'use client';

import { io, Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';

export function useSocket(chatId: string | undefined): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!chatId) return;
    // ensure URL is defined
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL;
    if (!wsUrl) {
      console.warn('NEXT_PUBLIC_WS_URL is not defined');
      return;
    }
    const s: Socket = io(wsUrl, {
      withCredentials: true, // send cookies
    });
    setSocket(s);
    // once connected, join the room
    s.on('connect', () => {
      s.emit('join', { chatId });
    });
    // Clean up: leave & disconnect
    return () => {
      if (s.connected) {
        s.emit('leave', { chatId });
      }
      s.disconnect();
      setSocket(null);
    };
  }, [chatId]);

  return socket;
}
