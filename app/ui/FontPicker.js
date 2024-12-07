"use client";
import React, { useContext } from "react";
import FontContext from "@/context/FontContext";
import { ing115_font, hin115_font, binaryvertical115_font } from '@/fonts';
const FontPicker = () => {
  const { font, setFont } = useContext(FontContext);
  const handlevaluechange = (e) => {
    const v_to_f = (sval) => {
      switch (sval) {
        case '0': return ing115_font.className ;
        case '1': return hin115_font.className ;
        case '2': return binaryvertical115_font.className ;
        default: return ing115_font.className ;
      }
    }
    const sf = v_to_f(e.target.value);
    setFont(sf);    
  };
  return (
    <select value={font} onChange={handlevaluechange}>
      <option value="0">iNg115_font</option>
      <option value="1">hin115_font</option>
      <option value="2">binaryvertical115_font</option>
    </select>
  );
};
export default FontPicker;