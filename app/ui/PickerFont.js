"use client";
import React, { useContext } from "react";
// import { useState } from 'react';
import FontContext from "@/context/FontContext";
import { hin115_font, ing115_font, binaryvertical115_font } from '@/fonts';
const PickerFont = () => {
  const { font, setFont } = useContext(FontContext);
  const handlevaluechange = (e) => {
    const v_to_f = (sval) => {
      switch (sval) {
        case '0': return ing115_font.className ;
        case '1': return hin115_font.className ;
        case 'J': return binaryvertical115_font.className ;
        default: return ing115_font.className ;
      }
    }
    const sf = v_to_f(e.target.value);
    setFont(sf);     
  };
  return (
    <select onChange={handlevaluechange}>
      <option value="0">iNg115_font</option>
      <option value="1">hin115_font</option>
      <option value="J">binaryvertical115_font</option>
    </select>
  );
};
export default PickerFont;
// // Step 3: Create the FontPicker Component
// // Create a FontPicker.js component:
// import React, { useContext } from "react";
// import FontContext from "../context/FontContext";
// const FontPicker = () => {
//   const { font, setFont } = useContext(FontContext);
//   const handleFontChange = (e) => { setFont(e.target.value); };
//   return (
//     <select value={font} onChange={handleFontChange}>
//       <option value="Arial">Arial</option>
//       <option value="Helvetica">Helvetica</option>
//       <option value="Times New Roman">Times New Roman</option>
//     </select>
//   );
// };
// export default FontPicker;