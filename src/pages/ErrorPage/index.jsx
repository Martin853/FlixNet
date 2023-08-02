import React from "react";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ErrorPage = () => {
  return (
    <div className='w-full h-full p-4 flex justify-center items-center flex-col gap-5'>
      <h1 className='text-2xl font-bold text-center'>Error 404</h1>
      <h2 className='text-2xl font-semibold text-center'>
        This Page Doesn't Exist
      </h2>
      <BiSolidError className='text-yellow-400 text-4xl' />
      <motion.span whileHover={{ scale: 1.2 }}>
        <Link
          to={"/"}
          className='px-4 py-2 rounded-lg border-2 border-white text-lg hover:bg-white hover:text-black duration-300 transition-all ease-in-out'
        >
          Go back
        </Link>
      </motion.span>
    </div>
  );
};
