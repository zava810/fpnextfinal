//"use client";
import SideNav from '@/app/ui/dashboard/sidenav';
//import FontContext from "@/context/FontContext";
import React, { useContext } from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  //const { font } = useContext(FontContext);
  return (
    <div className={`flex h-screen flex-col md:flex-row md:overflow-hidden`}>
		  <div className={`w-full flex-none md:w-64`}>
		  {/* <div className={`${font} antialiased w-full flex-none md:w-64`}> */}
			<SideNav />
		  </div>
		  <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

// // Step 4: Use the FontPicker Component
// // In any component where you want to use the font picker:
// import React, { useContext } from "react";
// import FontContext from "../context/FontContext";
// import FontPicker from "./FontPicker";
// const MyComponent = () => {
//   const { font } = useContext(FontContext);
//   return (
//     <div style={{ fontFamily: font }}>
//       <p>This text will change font</p>
//       <FontPicker />
//     </div>
//   );
// };
// export default MyComponent;