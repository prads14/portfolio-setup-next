import '@/app/ui/global.css';
import { poppins, oswald } from '@/app/ui/fonts'

import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>{children}</body>
    </html>
  );
}
