import React from "react";
import { Navbar } from "./components/Navbar";
import { MobileDesktopNavbar } from "./components/MobileDesktopNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailedPage } from "./pages/DetailedPage";
import { ErrorPage } from "./pages/ErrorPage";
import { GenrePage } from "./pages/GenrePage";

export const App = () => {
  return (
    <BrowserRouter>
      <div
        className='font-poppins w-full min-h-screen p-4 sm:p-8 md:p-12 bg-gradient-to-b from-sky-950 to-black text-white flex flex-col gap-3'
        style={{ minHeight: "100svh" }}
      >
        <Navbar />
        <div className='w-full h-full flex gap-5'>
          <div className='hidden md:block w-3/12'>
            <MobileDesktopNavbar />
          </div>
          <div className='w-full md:w-9/12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<DetailedPage />} />
              <Route path='/genre/:id' element={<GenrePage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
