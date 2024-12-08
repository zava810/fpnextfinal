"use client";
import { createContext, useState } from "react";
import { ing115_font } from '@/fonts';
const FontContext = createContext({ font: ing115_font.className, setFont: () => {}, });
export const FontProvider = ({ children }) => {
  const [font, setFont] = useState(ing115_font.className);
  return ( <FontContext.Provider value={{ font, setFont }}> {children} </FontContext.Provider> );
};
export default FontContext;

// // **Step 1: Create the Font Context**
// // Create a `FontContext.js` file in a suitable location (e.g., in a `context` folder):
// import { createContext, useState } from "react";
// const FontContext = createContext({ font: "Arial", setFont: () => {}, });
// export const FontProvider = ({ children }) => {
//   const [font, setFont] = useState("Arial");
//   return ( <FontContext.Provider value={{ font, setFont }}> {children} </FontContext.Provider> );
// };
// export default FontContext;