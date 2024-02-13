"use client";

import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaBars, FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import SideBarContent from "./SidebarContent";
import AppBarContent from "./AppbarContent";

const Navbar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    router.replace("/");
  };

  const toggleBar = (e) => {
    e.stopPropagation();
    setCollapsed1(true);
  };

  return (
    <div className="flex w-full">
      {/* mobile screen  */}
      <div
        className={`${
          collapsed1 ? "w-[300px] lg:w-[15%]" : "w-0"
        } z-10 bg-[#468AE7] block lg:hidden border-r-[1px] h-screen fixed overflow-auto top-0 lg:sticky lg:top-0 border-r-gray-200 transition-all duration-200`}
      >
        <div
          onClick={() => setCollapsed(!collapsed)}
          className={`absolute bg-orange-400 cursor-pointer ${
            collapsed ? "-right-3" : "-right-4"
          } top-20 hidden lg:flex justify-center items-center p-1 rounded-full`}
        >
          {collapsed ? (
            <BsChevronLeft className="text-white" />
          ) : (
            <BsChevronRight className="text-white" />
          )}
        </div>
        <SideBarContent
          setCollapsed1={setCollapsed1}
          collapsed1={collapsed1}
          collapsed={collapsed}
        />
      </div>
      {/* pc screen  */}
      <div
        className={`${
          collapsed ? "w-[300px] lg:w-[15%]" : "w-0"
        } z-10 bg-[#468AE7] hidden lg:flex border-r-[1px] h-screen sticky overflow-auto top-0 lg:top-0 border-r-gray-200 transition-all duration-200`}
      >
        <SideBarContent
          setCollapsed1={setCollapsed1}
          collapsed1={collapsed1}
          collapsed={collapsed}
        />
      </div>
      <div
        className={`${
          collapsed ? "w-full lg:w-[85%]" : "w-full"
        } transition-all duration-200`}
      >
        <div className="h-16 shadow-lg flex justify-between items-center px-4 sticky top-0 bg-[#468AE7]">
          <div className="flex justify-start items-center gap-3">
            <FaBars
              onClick={toggleBar}
              className="lg:hidden block text-white"
              size={22}
            />
            <BsChevronRight
              onClick={() => setCollapsed(!collapsed)}
              className={`lg:block hidden text-white ${
                collapsed ? "rotate-[180deg]" : "rotate[0]"
              } transition-all duration-200 cursor-pointer`}
              size={22}
            />
            <p className="text-white font-semibold text-[20px]">
              <AppBarContent />
            </p>
          </div>
          <div
            className="relative h-12 w-12 rounded-full border-[1px] border-gray-200  cursor-pointer"
            onClick={() => setProfileDrop((prev) => !prev)}
          >
            {/* <ImageNoSSR avatar={user?.avatar} /> */}
            <div
              className={`${
                profileDrop ? "h-[90px] border-[1px]" : "h-0 border-0"
              } transition-all w-[200px] duration-200 absolute top-[50px] right-[20px]  bg-white border-gray-200 shadow-md overflow-hidden flex flex-col`}
            >
              <p className="text-gray-400 text-sm px-4 py-3 hover:bg-gray-200  transition-all duration-200 flex justify-start items-center gap-2">
                <FaRegUser size={20} /> Profile
              </p>
              <p
                className="text-gray-400 text-sm px-4 py-3 hover:bg-gray-200  transition-all duration-200 flex justify-start items-center gap-2"
                onClick={handleLogout}
              >
                <MdLogout size={20} /> Logout
              </p>
            </div>
          </div>
        </div>
        {/* main  */}
        <div className="flex flex-col lg:p-6 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
