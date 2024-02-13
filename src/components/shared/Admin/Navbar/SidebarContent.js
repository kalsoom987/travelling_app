import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import { SidebarData } from "@/utils/sidebarData";
import { ReactSVG } from "react-svg";

const SideBarContent = ({ setCollapsed1, collapsed1, collapsed }) => {
  const [sidebarContent, setSidebarContent] = useState(SidebarData);
  const router = useRouter();
  const pathname = usePathname();

  const handleParentItem = (val) => {
    if (val.path) {
      router.push(val.path);
    }

    if (val.isChildOpen && val.name !== "Dashboard") {
      setSidebarContent((prev) => {
        const updatedIndex = prev.findIndex((x) => x.name === val.name);
        if (updatedIndex !== -1) {
          prev[updatedIndex].isChildOpen = false;
        }
        return [...prev];
      });
    } else if (!val.isChildOpen && val.name !== "Dashboard") {
      setSidebarContent((prev) => {
        const updatedIndex = prev.findIndex((x) => x.name === val.name);
        if (updatedIndex !== -1) {
          prev[updatedIndex].isChildOpen = true;
        }
        return [...prev];
      });
    }
  };

  const Icon = ({ name }) => {
    const IconComponent = name;
    return <IconComponent />;
  };

  return (
    <>
      {/* mobile screen start */}
      <div
        className={`${
          collapsed1 ? "flex opacity-[1]" : "hidden opacity-0"
        } p-3 w-full flex-col`}
      >
        <div className="relative flex items-center">
          <div className="flex items-center ">
            <ReactSVG src="/assets/logo-white.svg" className="h-6 w-6" />
            <p className="text-white text-[24px] font-bold">TripPix</p>
          </div>
          <div
            className="flex justify-end lg:hidden p-5 absolute right-0 "
            onClick={() => setCollapsed1(false)}
          >
            <FaTimes className="text-white" />
          </div>
        </div>
        <div className="border-b-[1px] border-b-white my-2"></div>
        <div className="flex flex-col gap-2">
          {sidebarContent.map((val, i) => {
            return (
              <div
                onClick={() => handleParentItem(val)}
                key={i}
                className=" flex flex-col"
              >
                <div
                  className={`flex items-center justify-between  py-2 px-3  cursor-pointer hover:bg-[#2F2F2F] transition-all duration-200 rounded-[4px] ${
                    pathname === val.path ? "bg-[#2F2F2F]" : ""
                  } `}
                >
                  <div className="flex items-center gap-2 justify-start">
                    <span className="text-[#ffffff]">
                      <Icon name={val.icon} />
                    </span>
                    <p className="text-sm text-[#ffffff] font-semibold">
                      {val.name}
                    </p>
                  </div>
                  {val.children.length > 0 && (
                    <BsChevronDown
                      color="white"
                      className={`${
                        val.isChildOpen ? "rotate-180" : "rotate-0"
                      } transition-all duration-200 `}
                    />
                  )}
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${
                    val.isChildOpen ? "min-h-[50px] h-auto" : "min-h-0 h-0"
                  } overflow-hidden transition-all duration-200`}
                >
                  {val.children.length > 0 && (
                    <div className="flex flex-col gap-2 px-5">
                      {val.children.map((child, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => router.push(child.path)}
                            className={`flex items-center justify-between  py-2 px-3  cursor-pointer hover:bg-[#2F2F2F] transition-all duration-200 rounded-[4px] ${
                              pathname === child.path ? "bg-[#2F2F2F]" : ""
                            } `}
                          >
                            <div className="flex items-center gap-2 justify-start">
                              <span className="text-[#ffffff]">
                                <Icon name={val.icon} />
                              </span>
                              <p className="text-sm text-[#ffffff]">
                                {child.name}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* mobile screen end  */}

      {/* pc screen start  */}
      <div
        className={`${
          collapsed ? "lg:flex opacity-[1]" : "lg:hidden opacity-0"
        } p-1 w-full flex-col hidden`}
      >
        <div className="relative flex justify-center items-center">
          <ReactSVG src="/assets/logo-white.svg" className="h-6 w-6" />
          <p className="text-white text-[24px] font-bold">TripPix</p>
        </div>
        <div className="border-b-[1px] border-b-white my-2"></div>
        <div className="flex flex-col gap-2">
          {sidebarContent.map((val, i) => {
            return (
              <div
                onClick={() => handleParentItem(val)}
                key={i}
                className="flex flex-col"
              >
                <div
                  className={`flex items-center justify-between  py-2 px-3  cursor-pointer hover:bg-[#2F2F2F] transition-all duration-200 rounded-[4px] ${
                    pathname === val.path ? "bg-[#2F2F2F]" : ""
                  } `}
                >
                  <div className="flex items-center gap-2 justify-start">
                    <span className="text-[#ffffff]">
                      <Icon name={val.icon} />
                    </span>
                    <p className="text-sm text-[#ffffff] font-semibold">
                      {val.name}
                    </p>
                  </div>
                  {val.children.length > 0 && (
                    <BsChevronDown
                      color="white"
                      className={`${
                        val.isChildOpen ? "rotate-180" : "rotate-0"
                      } transition-all duration-200 `}
                    />
                  )}
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`${
                    val.isChildOpen ? "min-h-[50px] h-auto" : "min-h-0 h-0"
                  } overflow-hidden transition-all duration-200`}
                >
                  {val.children.length > 0 && (
                    <div className="flex flex-col gap-2 px-5">
                      {val.children.map((child, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => router.push(child.path)}
                            className={`flex items-center justify-between  py-2 px-3  cursor-pointer hover:bg-[#2F2F2F] transition-all duration-200 rounded-[4px] ${
                              pathname === child.path ? "bg-[#2F2F2F]" : ""
                            } `}
                          >
                            <div className="flex items-center gap-2 justify-start">
                              <span className="text-[#ffffff]">
                                <Icon name={val.icon} />
                              </span>
                              <p className="text-sm text-[#ffffff]">
                                {child.name}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* pc screen end  */}
    </>
  );
};

export default SideBarContent;
