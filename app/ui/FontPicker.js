"use client";
import { useState } from 'react';
import { hin115_font, ing115_font, binaryvertical115_font } from '@/fonts';
const FontPicker = () => {
  const [f, setf] = useState(ing115_font.className);
  document.body.classList.add(f);
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
    setf(sf);     
  };
  return (
    <select onChange={handlevaluechange}>
      <option value="0">iNg115_font</option>
      <option value="1">hin115_font</option>
      <option value="J">binaryvertical115_font</option>
    </select>
  );
};
export default FontPicker;
