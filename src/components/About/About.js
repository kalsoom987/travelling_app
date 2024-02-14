import React from 'react'
import Image from 'next/image'
import Container from '../shared/Reuseables/Container';
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <>
      <div className='bg-[url("/assets/images/about.jpeg")] w-full h-[300px] overflow-hidden bg-cover bg-no-repeat text-white items-center flex'>

        <div className='ml-16 '>
          <h1 className='text-5xl font-bold  py-4'>
            About us
          </h1>
          <span className='text-base'>
            Your ticket to wanderlust begins here
          </span>
        </div>
      </div>
      <div className='flex flex-row  items-center justify-center flex-wrap' >
        <Container>
          <div className='  py-16 px-16  '>
            <h1 className='font-bold size-4 mb-4'>Innovation</h1>
            <p>

              Revolutionizing travel, our page is a beacon of innovation. Seamlessly blending cutting-edge technology with wanderlust, we offer an immersive experience like never before. From AI-driven trip recommendations to interactive maps, every click is a step into the future of exploration.
            </p>
          </div>

          <div className=' py-16   ' >

            <div class="flex justify-between mb-4">
              <span class="text-base font-medium text-black dark:text-white">Designing</span>
              <span class="text-sm font-medium text-black dark:text-white">90</span>
            </div>
            <div class="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-black h-2.5 rounded-full w-80" ></div>
            </div>
            <div class="flex justify-between mb-4   ">
              <span class="text-base font-medium text-black dark:text-white">Marketing</span>
              <span class="text-sm font-medium text-black dark:text-white">80</span>
            </div>
            <div class="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-black h-2.5 rounded-full w-72" ></div>
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-base font-medium text-black dark:text-white">Branding</span>
              <span class="text-sm font-medium text-black dark:text-white">100</span>
            </div>
            <div class="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-black h-2.5 rounded-full w-96" ></div>
            </div>
            <div class="flex justify-between mb-4 ">
              <span class="text-base font-medium text-black dark:text-white">Product Design</span>
              <span class="text-sm font-medium text-black dark:text-white">64</span>
            </div>
            <div class="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-black h-2.5 rounded-full w-40" ></div>
            </div>

          </div>
        </Container>
      </div>
      <div className=' flex '>
      <Container>
        
          <div className=' pl-5'>
            <Image src='/assets/images/banner2.jpg' alt='' height={500} width={730} />
          </div>
          <div className='w-1/2 pl-10 bg-[#f1f5f9] font-[Poppins] '>
            <h1 className='font-bold pt-20'>Embark on a Journey Beyond Borders with Trippix</h1>
            <p>
              Explore the extraordinary with Trippex, your gateway to tailor-made adventures and unforgettable moments. Our platform invites you to embark on a journey beyond borders.  </p>
            <div className='flex pt-3 gap-5'>
              <div> <div className='flex'><span><TiTick /></span> <span>Explore new places</span></div>
                <div className='flex'><span><TiTick /></span> <span> Cultural immersion</span></div>
                <div className='flex'><span><TiTick /></span> <span>Adventure awaits</span></div></div>
              <div> <div className='flex'><span><TiTick /></span> <span>Memorable experiences</span></div>
                <div className='flex'><span><TiTick /></span> <span> Broaden horizons</span></div>
                <div className='flex'><span><TiTick /></span> <span>Create memories</span></div></div>
            </div>
          </div>

        

      </Container>
      </div>
      <div>
      <Container>
      
          <div className='w-1/2 justify-center items-center px-25 font-[Poppins]'>
            <h1>About</h1>
            <p>
              Explore, experience, evolve — your journey begins. Uncover hidden gems, savor diverse cultures, and redefine your travel narrative. Embrace the extraordinary with us.Embark on seamless adventures tailored to your wanderlust, and let each destination weave a unique story in the tapestry of your travels.
            </p>
            <button class="bg-black hover:bg-slate-200 text-white font-bold py-2 px-4 border border-black rounded">
              Button
            </button>
          </div>
          <div>

          </div>
       
      </Container>
      </div>


    </>

  )
}

export default About