import '@/app/ui/global.css';
//import React from 'react';
import { FontProvider } from '@/context/FontContext';
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">      
        <body>        
          <FontProvider>{children}</FontProvider>
        </body>
    </html>
  );
}

// // Step 2: Wrap Your Application with the Provider
// // In your app directory, modify your layout.js file:
// import { FontProvider } from "../context/FontContext";
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <FontProvider>{children}</FontProvider>
//       </body>
//     </html>
//   );
// }
