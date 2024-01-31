import React from 'react'
import Image from 'next/image'
import Container from '../shared/Reuseables/Container'


function Service() {
    return (

        <div className='flex flex-row bg-[#468ae7] py-16 text-white w-full  items-center justify-center  space-x-[5px] '>
            <Container>
                <div className='grid  md:grid-cols-4 grid-cols-1 gap-[40px]'>

                    <div className='items-center justify-start flex  gap-4 '>

                        <Image src='/assets/icons/icon-1.png' alt='service' width={49} height={49} />
                        <div >
                            <h2>
                                +100 Destinations
                            </h2>
                            <span className='text-[#94a3b8]'>
                                Chitaral,Hunza valley,swat valley
                            </span>
                        </div>
                    </div>
                    <div className='items-center justify-start flex  gap-4 '>

                        <Image src='/assets/icons/icon-2.png' alt='service' width={49} height={49} />
                        <div >
                            <h2>
                                Best price
                            </h2>
                            <span className='text-[#94a3b8]'>
                                special offers and discounts
                            </span>
                        </div>
                    </div>
                    <div className='items-center justify-start flex  gap-4 '>

                        <Image src='/assets/icons/icon-3.png' alt='service' width={49} height={49} />
                        <div >
                            <h2>
                                Great Customer
                            </h2>
                            <span className='text-[#94a3b8]'>
                                we have a great customer
                            </span>
                        </div>
                    </div>
                    <div className='items-center justify-start flex  gap-4 '>

                        <Image src='/assets/icons/icon-4.png' alt='service' width={49} height={49} />
                        <div >
                            <h2>
                                Fast booking
                            </h2>
                            <span className='text-[#94a3b8]'>
                                online booking
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Service