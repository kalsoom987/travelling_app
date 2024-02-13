import Navbar from "@/components/shared/Admin/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#2F2F2F]">
      <Navbar>
        <p className="text-[28px] text-white font-semibold">
          This is User lists
        </p>
      </Navbar>
    </div>
  );
};

export default page;
