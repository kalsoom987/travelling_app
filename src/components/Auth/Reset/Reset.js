"use client";

import React, { useState } from "react";
import Container from "../../shared/Reuseables/Container";
import Input from "@/components/shared/Reuseables/Input";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Reset = () => {
  const [togglePass, setTogglePass] = useState(false);

  return (
    <div className="w-full flex justify-center items-center py-16">
      <Container>
        <div className="flex flex-col items-center w-full">
          <p className="text-center text-black pb-10 text-3xl font-semibold ">
            Reset Password
          </p>
          <form className="grid grid-cols-1  pt-8 pb-3 gap-5 w-full md:w-[400px]  ">
            <Input
              label="OTP"
              labelStyle="text-sm font-semibold text-[#333333]"
              inputType="number"
              inputStyle="w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3"
              placeholder="6-digits"
              error={null}
            />
            <Input
              label="Password"
              labelStyle="text-sm font-semibold text-[#333333]"
              inputType={togglePass ? "text" : "password"}
              inputStyle="w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3"
              placeholder="Enter your password"
              error={null}
              toggleIcon={togglePass ? <IoEyeOffOutline /> : <IoEyeOutline />}
              handleToggle={() => setTogglePass((prev) => !prev)}
            />
            <Input
              label="Confirm Password"
              labelStyle="text-sm font-semibold text-[#333333]"
              inputType={togglePass ? "text" : "password"}
              inputStyle="w-full focus:outline-none text-sm text-gray-400 border-[1px] border-gray-300 px-3 md:px-4 py-3"
              placeholder="Confirm your password"
              error={null}
              toggleIcon={togglePass ? <IoEyeOffOutline /> : <IoEyeOutline />}
              handleToggle={() => setTogglePass((prev) => !prev)}
            />
            <button className="bg-[#468AE7] py-3 text-white mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Reset;
