// components/ReCAPTCHAWrapper.tsx
import React, { forwardRef } from 'react';
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha';

// Оборачиваем компонент в forwardRef с правильной типизацией
const ReCAPTCHAWrapper = forwardRef<ReCAPTCHA, ReCAPTCHAProps>((props, ref) => {
  //@ts-ignore
  return <ReCAPTCHA ref={ref} {...props} />;
});

ReCAPTCHAWrapper.displayName = 'ReCAPTCHAWrapper';

export default ReCAPTCHAWrapper;
