import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8 text-center font-body text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title} Kft., Made by{' '}
      <a href="https://github.com/komisz" className="text-blue-600">
        komisz
      </a>{' '}
      with <span className="grayscale">❤️</span>
    </footer>
  );
};
