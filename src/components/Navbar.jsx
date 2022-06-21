import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = (_) => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center mx-auto max-w-[1240px] h-24 px-4 text-white">
      <h1 className="w-fuu text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="md:flex hidden">
        <li className="p-4 cursor-pointer hover:underline ease-in duration-150">
          Home
        </li>
        <li className="p-4 cursor-pointer hover:underline ease-in duration-150">
          Company
        </li>
        <li className="p-4 cursor-pointer hover:underline ease-in duration-150">
          Resources
        </li>
        <li className="p-4 cursor-pointer hover:underline ease-in duration-150">
          About
        </li>
        <li className="p-4 cursor-pointer hover:underline ease-in duration-150">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`
          ${
            !nav ? "left-0 " : "left-[-100%]"
          } fixed top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden block"
            `}
      >
        <h1 className="w-fuu text-3xl font-bold text-[#00df9a] m-4">React.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
