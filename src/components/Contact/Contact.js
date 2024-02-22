import React from 'react'
import Image from 'next/image'
import { FaPhone } from "react-icons/fa6";
import Container from '../shared/Reuseables/Container';
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TiSocialSkype } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";



const Contact = () => {
    return (
        <>
            <div>
                <div className='bg-[url("/assets/images/about.jpeg")] w-full h-[300px] overflow-hidden bg-cover bg-no-repeat text-white items-center flex'>

                    <div className='ml-16 '>
                        <h1 className='text-5xl font-bold  py-4'>
                            Contact US
                        </h1>
                        <span className='text-base'>
                            Your ticket to wanderlust begins here
                        </span>
                    </div>
                </div>


            </div>
            <div className='justify-center align-center gap-10 flex'>

                <div className='flex flex-col w-60  justify-start  gap-3'>
                    <FaPhone className='mt-16' />
                    <h1 className='font-bold text-base'>Phone</h1>
                    <p>A wonderful serenity has taken possession of my entire soul, like these</p>
                    <span className='mb-16 text-blue-500'>039493493</span>
                </div>
                <div className='flex flex-col w-60  justify-start  gap-3'>
                    <MdEmail className='mt-16' />
                    <h1 className='font-bold text-base'>Email</h1>
                    <p>A wonderful serenity has taken possession of my entire soul, like these</p>
                    <span className='mb-16 text-blue-500'>websitecontact@gmail.com</span>
                </div>
                <div className='flex flex-col w-60  justify-start  gap-3'>
                    <FaLocationArrow className='mt-16' />
                    <h1 className='font-bold text-base'>Adress</h1>
                    <p>A wonderful serenity has taken possession of my entire soul, like these</p>
                    <span className='mb-16 text-blue-500'>Punjab,pakistan</span>
                </div>


            </div>

            <div className='w-[400px]  items-center justify-center flex'>
                <div className='flex items-center justify-center bg-gray-50 w-full  '>
                    <Container >



                        <form >
                            <div>
                                <h1 className='font-bold text-2xl'>
                                    Leave us your info
                                </h1>
                                <p>and we will get back to you</p>
                            </div>
                            <div class="grid gap-6 md:grid-cols-2 justify-center ">
                                <div>

                                    <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                </div>
                                <div class="mb-3">

                                    <input type="email" id="email" class=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                                </div>


                            </div>
                            <div>

                                <input type="text" id="first_name" class="bg-white border mb-3 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Subject" required />
                            </div>



                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm outline-none text-gray-900 mb-3 bg-white rounded-lg border   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            <button class="btn btn-blue bg-blue-500 text-white w-full py-2 mb-20 rounded-2xl mt-3">
                                Submit Now
                            </button>
                        </form>



                    </Container>
                </div>
            </div>
            <div className='w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.59721252366!2d72.92130072558966!3d33.61600697030895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708513788374!5m2!1sen!2s" width={1600} height={400}   style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex items-center justify-center gap-4 py-16'>
                <div>
                    <MdMailOutline />
                </div>
                <div>
                    <TiSocialSkype />
                </div>
                <div>
                    <TiSocialFacebook />
                </div>
                <div>
                    <FaTwitter />
                </div>
            </div>
        </>
    )
}

export default Contact