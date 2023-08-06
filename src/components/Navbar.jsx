import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MobileDesktopNavbar } from "./MobileDesktopNavbar";
import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuButtonVariants = {
    open: { rotate: 45, scale: 0.8 },
    closed: { rotate: 0, scale: 1 },
  };

  const closeButtonVariants = {
    open: { rotate: 0, scale: 1 },
    closed: { rotate: -45, scale: 0.8 },
  };

  return (
    <div className='flex flex-col w-full relative z-10'>
      <nav className='w-full h-fit flex items-center justify-between'>
        <Link to={"/"}>
          <motion.div
            className='flex gap-3 items-center'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img src={logo} className='w-10 mb-2 sm:w-15' />
            <motion.h1
              className='text-2xl sm:text-3xl font-bold'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              Flix Net
            </motion.h1>
          </motion.div>
        </Link>
        <div className='hidden md:block w-5/12'>
          <SearchBar />
        </div>
        <motion.span
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.8, rotate: 180 }}
          variants={open ? closeButtonVariants : menuButtonVariants}
          initial={false}
          animate={open ? "open" : "closed"}
          onClick={() => setOpen(!open)}
          className='md:hidden'
        >
          {open ? (
            <AiOutlineClose className='text-2xl hover:cursor-pointer' />
          ) : (
            <AiOutlineMenu className='text-2xl hover:cursor-pointer' />
          )}
        </motion.span>
      </nav>
      {open && (
        <div className='md:hidden'>
          <MobileDesktopNavbar />
        </div>
      )}
    </div>
  );
};
