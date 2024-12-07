"use client"
// import React, { createContext, useState, ReactNode, useContext, useRef } from "react";
// import { ing115_font } from '@/fonts';

// export const fContext = createContext({ font: ing115_font.className, setFont: () => {} });

// export const fProvider = ({ children }:{children: React.ReactNode}) => {
//   const [font, setFont] = useState("Arial");
//   return ( <fContext.Provider value={{ font, setFont }}> {children} </fContext.Provider> );
// };

//export const usef = () => useContext(fContext);

import { createContext, useState } from "react";
import { ing115_font } from '@/fonts';
const FontContext = createContext({ font: ing115_font.className, setFont: () => {}, });
export const FontProvider = ({ children }) => {
  const [font, setFont] = useState(ing115_font.className);
  return ( <FontContext.Provider value={{ font, setFont }}> {children} </FontContext.Provider> );
};
export default FontContext;

