import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className='w-full h-fit py-2 px-3 rounded-lg bg-neutral-100 shadow-lg'>
      <div className='w-full h-full flex items-center gap-3'>
        <input
          type='text'
          placeholder='Search for a movie'
          className='text-black bg-transparent outline-none w-full'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <motion.span whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.85 }}>
          <AiOutlineSearch className='text-neutral-800 text-2xl outline-none hover:cursor-pointer' />
        </motion.span>
      </div>
    </div>
  );
};
