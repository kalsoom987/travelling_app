import React from 'react'
import Image from 'next/image'


function SearchTour() {
  
  return (
    <div className='flex flex-row w-full' >
      
        <div className='grid  md:grid-cols-5 grid-cols-1  w-full '>


          <div className='bg-[url("/assets/images/Azad.jpg")] bg-contain bg-no-repeat h-[300px] relative overflow-hidden'>
            Kumrat Valley
            <div className='bg-[rgba(0,0,0,0.7)]  bg-opacity-0 absolute top-0 h-[300px] w-full'>

            </div>
          </div>

          <div className='bg-[url("/assets/images/Kalam-Valley.jpg")] bg-contain bg-no-repeat h-[300px] relative overflow-hidden'>
            Kalam Valley

            <div className='bg-[rgba(0,0,0,0.7)]  bg-opacity-0 absolute top-0 h-[300px] w-full'>

            </div>
          </div>
          <div className='bg-[url("/assets/images/Hunza-Valley.jpg")] bg-contain bg-no-repeat h-[300px] relative overflow-hidden '>
            Hunza Valley
            <div className='bg-[rgba(0,0,0,0.7)]  bg-opacity-0 absolute top-0  h-[300px] w-full'>

            </div>
          </div>
          <div className='bg-[url("/assets/images/footer6.jpg")] bg-contain bg-no-repeat h-[300px] relative overflow-hidden'>
            Kumrat Valley
            <div className='bg-[rgba(0,0,0,0.7)]  bg-opacity-0 absolute top-0 h-[300px] w-full'>

            </div>
          </div>

          <div className='bg-[url("/assets/images/shadra.jpg")] bg-contain bg-no-repeat h-[300px] relative overflow-hidden'>
            Sharda 
            <div className='bg-[rgba(0,0,0,0.7)]  bg-opacity-0 absolute top-0 h-[300px] w-full '>

            </div>

          </div>




        </div>
      


    </div>
  )
}

export default SearchTour