import React from "react";
import Image from "next/image";
import Container from "../shared/Reuseables/Container";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className='bg-[url("/assets/images/about.jpeg")] w-full h-[300px] overflow-hidden bg-cover bg-no-repeat text-white items-center flex'>
        <div className="pl-8 md:pl-16 ">
          <h1 className="text-2xl md:text-5xl font-bold py-2 md:py-4">
            About us
          </h1>
          <span className="text-base">
            Your ticket to wanderlust begins here
          </span>
        </div>
      </div>
      <div className="flex flex-row  items-center justify-center py-20">
        <Container>
          <div className="flex justify-center items-center flex-col gap-5">
            <h1 className="font-bold text-center text-[24px]">Innovation</h1>
            <p className="text-center">
              Revolutionizing travel, our page is a beacon of innovation.
              Seamlessly blending cutting-edge technology with wanderlust, we
              offer an immersive experience like never before. From AI-driven
              trip recommendations to interactive maps, every click is a step
              into the future of exploration.
            </p>
          </div>
        </Container>
      </div>
      <div className="flex justify-center items-center w-full bg-[#f1f5f9]">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/images/banner2.jpg"
              alt=""
              height={500}
              width={1730}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:py-0 py-5 md:px-10">
            <h1 className="font-bold">
              Embark on a Journey Beyond Borders with TripPix
            </h1>
            <p>
              Explore the extraordinary with TripPix, your gateway to
              tailor-made adventures and unforgettable moments. Our platform
              invites you to embark on a journey beyond borders.
            </p>
            <div className="flex pt-3 gap-5">
              <div>
                <div className="flex">
                  <span>
                    <TiTick />
                  </span>
                  <span>Explore new places</span>
                </div>
                <div className="flex">
                  <span>
                    <TiTick />
                  </span>
                  <span> Cultural immersion</span>
                </div>
                <div className="flex">
                  <span>
                    <TiTick />
                  </span>
                  <span>Adventure awaits</span>
                </div>
              </div>
              <div>
                <div className="flex">
                  <span>
                    <TiTick />
                  </span>
                  <span>Memorable experiences</span>
                </div>
                <div className="flex">
                  <span>
                    <TiTick />
                  </span>
                  <span> Broaden horizons</span>
                </div>
                <div className="flex">
                  <span>
                    <TiTick />
                  </span>
                  <span>Create memories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:h-[600px] border-b-[2px] border-b-white">
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <h1 className="font-bold text-3xl">About Services</h1>
          <p className="py-5">
            Explore, experience, evolve — your journey begins. Uncover hidden
            gems, savor diverse cultures, and redefine your travel narrative.
            Embrace the extraordinary with us.Embark on seamless adventures
            tailored to your wanderlust, and let each destination weave a unique
            story in the tapestry of your travels.
          </p>
          <button className="bg-[#2F2F2F] hover:bg-slate-200 text-white font-bold py-2 px-4 border border-[#2F2F2F] rounded mb-20">
            Button
          </button>
        </div>
        <div className=" bg-[#2F2F2F] text-white w-full md:w-1/2 h-full p-5 md:p-10 flex justify-center">
          <div className="flex flex-col gap-10 justify-center">
            <div className="items-center justify-start flex gap-4">
              <Image
                src="/assets/icons/airplane.png"
                alt="service"
                width={49}
                height={49}
              />
              <div>
                <h2 className="text-sm text-white">+100 Destinations</h2>
                <span className="text-[#EDEDED] text-sm">
                  Embark on a journey to 100 breathtaking destinations, where
                  each moment becomes a vivid memory waiting to be explored on
                  our website.
                </span>
              </div>
            </div>
            <div className="items-center justify-start  flex gap-4 ">
              <Image
                src="/assets/icons/cash.png"
                alt="service"
                width={49}
                height={49}
              />
              <div>
                <h2>Best price</h2>
                <span className="text-[#EDEDED] text-sm">
                  Discover unbeatable experiences at the best prices, making
                  your travel dreams a reality with us
                </span>
              </div>
            </div>
            <div className="items-center justify-start flex  gap-4 ">
              <Image
                src="/assets/icons/support.png"
                alt="service"
                width={49}
                height={49}
              />
              <div>
                <h2>Great Customer</h2>
                <span className="text-[#EDEDED] text-sm">
                  Feel free to provide some details, and I'll be happy to assist
                  you in crafting a compelling tagline
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
