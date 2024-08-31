import React, { useState } from "react";
import logo from "../assets/logo.png";
import mtn from "../assets/mtn.png";
import mobile from "../assets/9mobile.png";
import airtel from "../assets/airtel.png";

// ICONS //
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaPhoneAlt, FaTv, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RxExit, RxCaretDown, RxCaretRight } from "react-icons/rx";
import { RiFileList3Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";

// ICONS //

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index); // Set active link for all items
    if (index === 5) {
      setIsOpen(!isOpen); // Toggle dropdown for "Airtime To Cash"
    } else {
      setIsOpen(false); // Close dropdown when other links are clicked
    }
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: BsGrid1X2Fill },
    { id: 2, path: "/buyairtime", name: "Buy Airtime", icon: FaPhoneAlt, icon2: RxCaretDown },
    { id: 3, path: "/buydata", name: "Buy Data", icon: FaWifi, icon2: RxCaretDown },
    { id: 4, path: "/tvsubscription", name: "TV Subscription", icon: FaTv, icon2: RxCaretDown },
    {
      id: 5,
      path: "/payelectricbill",
      name: "Pay Electric Bill",
      icon: AiOutlineThunderbolt,
      icon2: RxCaretDown,
    },
    { id: 6, path: "/airtimetocash", name: "Airtime To Cash", icon: FiRefreshCw, icon2: activeLink === 6 ? RxExit : RxCaretDown },
    { id: 7, path: "/transactions", name: "Transaction History", icon: RiFileList3Line },
    { id: 8, path: "/support", name: "Help & Support", icon: BiSupport },
  ];

  return (
    <div className="w-[320px] md:w-[250px] fixed left-0 top-0 z-10 h-screen text-blue-900 border-r pt-8 px-2 bg-blue-100 bg-opacity-60">
      {/* logo */}
      <div className="mb-8 flex items-center justify-center mr-6">
        <img src={logo} alt="logo" className="w-28 hidden md:flex" />
        <img src={logo} alt="logo" className="w-8 flex md:hidden" />
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6 px-5">
        {SIDEBAR_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={`flex items-center md:space-x-3 py-2 px-4 rounded-lg ${
                activeLink === index
                  ? "bg-blue-600 text-white border border-white" // Active state with white text and border
                  : "text-blue-900 hover:bg-blue-900 hover:bg-opacity-70 hover:text-white" // Default and hover states
              }`}
              onClick={() => handleLinkClick(index)}
            >
              <span className={`${activeLink === index ? "text-white" : "text-blue-900"} hover:text-white`}>{link.icon()}</span>
              <span className={`text-sm hidden md:flex ml-2 ${activeLink === index ? "text-white" : "text-blue-900"} hover:text-white`}>{link.name}</span>
              {link.icon2 && (
                <span className={`ml-auto ${activeLink === index ? "text-white" : "text-blue-900"} hover:text-white`}>
                  {link.icon2()}
                </span>
              )}
            </Link>
            {index === 5 && isOpen && ( // Show dropdown for "Airtime To Cash"
              <div className="mt-2 flex gap-1 items-center">
                <img src={mtn} alt="MTN" className="w-[54px] h-[40px] cursor-pointer" />
                <img src={airtel} alt="Airtel" className="w-[54px] h-[40px] cursor-pointer" />
                <img src={mobile} alt="9Mobile" className="w-[54px] h-[40px] cursor-pointer" />
                <span className="text-xs text-blue-800 flex items-center font-semibold cursor-pointer">
                  More <RxCaretRight size={16} />
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* Navigation Links */}
    </div>
  );
};

export default Sidebar;
