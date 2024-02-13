import React from "react";
import { ReactSVG } from "react-svg";

const GlobalLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen absolute top-0 bg-white">
      <div className="flex items-center justify-center dimming-effect">
        <ReactSVG src="/assets/logo.svg" className="h-20 w-20" />
        <p className="text-[#468ae7] text-[44px] font-bold">TripPix</p>
      </div>
    </div>
  );
};

export default GlobalLoader;
