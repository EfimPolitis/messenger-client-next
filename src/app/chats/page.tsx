import { ProfileInfo } from '@/components/frames/profile/ProfileInfo';
import { protectPage } from '@/utils/server/protect-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chats',
  description: 'Chats...',
};

async function ChatsPage() {
  await protectPage();

  return (
    <div className='w-screen h-screen flex items-center text-center justify-center'>
      <h1 className='text-4xl'>Добро пожаловать в Quick!</h1>
    </div>
  );
}

export default ChatsPage;
