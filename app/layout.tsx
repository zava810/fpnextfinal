import '@/app/ui/global.css';
import React, { useContext } from 'react';
import { FontProvider } from '@/context/FontContext';
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">      
        <body>        
          <FontProvider> {children} </FontProvider>
        </body>
    </html>
  );
}