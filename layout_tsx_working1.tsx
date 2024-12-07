"use client";
import '@/app/ui/global.css';
import React, { useState } from 'react';
import {
		hin115_font, ing115_font, binaryvertical115_font
} from '@/fonts';
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  // https://stackoverflow.com/questions/72946973/how-to-access-a-state-of-an-component-from-another-component-in-next-js
  const [f, setf] = useState(ing115_font.className);
  const handlevaluechange = (selectedval: string) => {
    const getFontcn = (sval:string) => {
      switch (sval) {
        case '0': return ing115_font.className ;
        case '1': return hin115_font.className ;
        case '2': return binaryvertical115_font.className ;
        default: return ing115_font.className ;
      }
    }
    const selectedf = getFontcn(selectedval);
    setf(selectedf);
  };

  return (
    <html lang="en">
        <body className={`${f} antialiased`}>
          <div>
            <select onChange={(e) => handlevaluechange(e.target.value)}>
            <option value="0">iNg115_font</option>
            <option value="1">hin115_font</option>
            <option value="2">binaryvertical115_font</option>
          </select>
        </div>
          {children}
        </body>
    </html>
  );
}
