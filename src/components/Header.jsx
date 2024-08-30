import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GoBell } from "react-icons/go";

const Header = ({ Message }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <div>
        <h1 className="font-semibold text-slate-800 text-2xl">{Message}</h1>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex">
          <h4 className="text-blue-600 font-bold text-md">Upgrade To Merchant</h4>
        </div>
        <div className="flex items-center space-x-2">
          <button className="relative text-2xl text-blue-600 rounded-full border border-blue-200 border-solid bg-blue-100 bg-opacity-70 p-2">
            <GoBell size={18} />
          </button>
          <button className="relative text-2xl text-blue-600 rounded-full border border-blue-200 border-solid bg-blue-100 bg-opacity-70 p-2">
            <FaRegUser size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
