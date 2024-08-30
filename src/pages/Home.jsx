import React from "react";
import cardImg from '../assets/card-img.png';
import { CiEdit } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header Message="Welcome Back, Lawal Wahab" />
      <div className="flex items-start py-4 px-12 gap-10">
        {/* HOME LEFT */}
        <div className="flex flex-col items-center p-5 gap-5 w-[50%]">
          <div className="flex justify-between items-center p-5 border border-blue-200 w-full rounded-2xl">
            <div className="flex flex-col gap-1">
              <span className="text-md font-semibold text-blue-900">Wallet Balance</span>
              <span className="text-4xl font-bold text-blue-900">₦3,000</span>
            </div>
            <button className="bg-blue-600 text-white px-12 py-3 rounded-xl hover:bg-blue-900">Fund Wallet</button>
          </div>

          <div className="flex justify-between items-center p-5 border border-blue-200 w-full rounded-2xl">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-blue-900">Referral</span>
              <span className="text-sm font-semibold text-blue-900">Referral Code: <span className="text-sm font-bold text-blue-900">18/152ha089</span></span>
              <div className="mt-4 flex gap-5 items-center">
                <div className="flex items-center gap-1">
                  <GoCopy className="text-xl text-blue-600" />
                  <span className="text-md font-semibold text-blue-600 hover:text-blue-900 cursor-pointer">Copy</span>
                </div>

                <div className="flex items-center gap-1">
                  <CiEdit className="text-xl text-blue-600" />
                  <span className="text-md font-semibold text-blue-600 hover:text-blue-900 cursor-pointer">Edit</span>
                </div>

                <div className="flex items-center gap-1">
                  <PiShareFat className="text-xl text-blue-600" />
                  <span className="text-md font-semibold text-blue-600 hover:text-blue-900 cursor-pointer">Share</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start p-5 border border-blue-200 w-full rounded-2xl">
            <div className="flex flex-col gap-4">
              <span className="text-md text-blue-900 font-semibold">Total referrals made</span>
              <span className="text-2xl font-bold text-blue-900">0</span>
              <div className="flex items-center gap-1">
                <IoWalletOutline className="text-xl text-blue-600" />
                <span className="text-md font-semibold text-blue-600 hover:text-blue-900 cursor-pointer">Cashout</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-md text-blue-900 font-semibold">Current Wallet Bonus</span>
              <span className="text-2xl font-bold text-blue-900">₦0.00</span>
            </div>
          </div>
        </div>

        {/* HOME RIGHT */}
        <div className="flex overflow-hidden py-5 px-10 w-[50%] h-[284px] bg-blue-100 rounded-3xl relative">
          <div className="flex flex-col gap-16 w-[50%]">
            <span className="text-blue-900 font-medium">Cards</span>
            <h3 className="text-blue-900 text-opacity-70 font-bold text-3xl">You Have No Saved Cards</h3>
          </div>

          <img src={cardImg} alt="" className="absolute right-0 top-0" />
        </div>
      </div>
    </div>
  );
};

export default Home;
