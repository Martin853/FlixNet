import React from "react";
import { Navbar } from "./components/Navbar";
import { MobileDesktopNavbar } from "./components/MobileDesktopNavbar";

export const App = () => {
  return (
    <div
      className='font-poppins w-full min-h-screen p-4 sm:p-8 md:p-12 bg-gradient-to-b from-sky-950 to-black text-white flex flex-col gap-3'
      style={{ minHeight: "100svh" }}
    >
      <Navbar />
      <div className='w-full h-full flex'>
        <div className='hidden md:block w-3/12'>
          <MobileDesktopNavbar />
        </div>
      </div>
    </div>
  );
};
