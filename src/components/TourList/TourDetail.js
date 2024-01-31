'use client'

import React, { useEffect, useState } from 'react'
import Container from '../shared/Reuseables/Container'
import { tourListData } from '@/utils/TourListData'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { LuClock3 } from 'react-icons/lu'
import {
  FaCalendarAlt,
  FaCheck,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaRegFileAlt,
  FaRegHeart,
  FaRegMap,
  FaUsers,
} from 'react-icons/fa'
import { VscTag } from 'react-icons/vsc'
import { IoMdBed } from 'react-icons/io'
import { IoEyeOutline } from 'react-icons/io5'

const TourDetail = () => {
  const [tour, setTour] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setTimeout(() => {
      const findTour = tourListData.find((x) => x.id === Number(id))
      setTour(findTour)
    }, 500)
    return () => clearInterval()
  }, [])

  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const people = [1, 2, 3, 4, 5]
  const [room, setRoom] = useState(1)
  const [roomData, setRoomData] = useState([
    {
      adult: 1,
      children: 1,
    },
  ])

  const handleRoom = (selectedRoom) => {
    setRoom(selectedRoom)
    if (selectedRoom > roomData.length) {
      const newRoomData = [...roomData]
      for (let i = roomData.length + 1; i <= selectedRoom; i++) {
        newRoomData.push({ adult: 1, children: 1 })
      }
      setRoomData(newRoomData)
    } else if (selectedRoom < roomData.length) {
      const newRoomData = roomData.slice(0, selectedRoom)
      setRoomData(newRoomData)
    }
  }

  return (
    <div className='flex flex-col'>
      {tour && (
        <>
          <div className='flex w-full relative h-[250px] md:h-[540px]'>
            <Image
              src={tour && tour?.bannerImage}
              alt='banner'
              width={2600}
              height={640}
              className=' h-[250px] md:h-[540px] w-full'
            />
            <div className='flex justify-center  w-full h-[250px] md:h-[540px] bg-[rgba(0,0,0,0.5)] absolute top-0'>
              <Container>
                <div className='absolute bottom-10'>
                  <p className='text-[29px] text-white font-bold'>{tour.title}</p>
                </div>
              </Container>
            </div>
          </div>
          <div className='bg-[#F5F5F5] w-full py-[30px] md:py-[55px] flex justify-center items-center'>
            <Container>
              <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <LuClock3 className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>{tour.duration} days</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaCalendarAlt className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Availability: {tour.availability}</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaPlaneDeparture className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Departure: {tour.departure}</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaPlaneArrival className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Arrival: {tour.arrival}</span>
                </div>
                <div className='flex items-center justify-start gap-3 mb-[9px]'>
                  <FaUsers className='text-[#468ae7]' />{' '}
                  <span className='text-[15px] text-[#333333]'>Max People: {tour.maxPeople}</span>
                </div>
              </div>
            </Container>
          </div>

          <div className='flex justify-center w-full items-center py-10'>
            <Container>
              <div className='flex lg:flex-row flex-col-reverse gap-6 justify-between  w-full'>
                <div className='w-full lg:w-[70%] flex flex-col'>
                  <div className='flex flex-col gap-5'>
                    <h3 className='text-[20px] font-semibold flex gap-3 items-center'>
                      <FaRegFileAlt className='text-[#457BE0] text-[20px]' /> <span>Tour Details</span>
                    </h3>
                    <p className='text-sm text-[#8c8c8c] text-justify'>{tour.description}</p>
                    <p className='text-sm text-[#8c8c8c] text-justify'>{tour.description}</p>
                    <p className='text-sm text-[#8c8c8c] text-justify'>{tour.description}</p>
                  </div>
                  <div className='flex flex-col gap-5 mt-6'>
                    <h3 className='text-[20px] font-semibold flex gap-3 items-center'>
                      <FaRegMap className='text-[#457BE0] text-[20px]' /> <span>Map</span>
                    </h3>
                    <div className='w-full'>{tour.mapEmbed}</div>
                  </div>
                </div>
                <div className='w-full lg:w-[30%] flex flex-col relative lg:-top-[424.5px]'>
                  <div className='flex flex-col  shadow-md bg-white'>
                    <div className='bg-[#2C487A] flex h-[50px] justify-center items-center text-white'>
                      Special Offer
                    </div>
                    <div className='bg-[#457BE0] flex gap-3 h-[130px] justify-center items-center text-white'>
                      <VscTag className='text-[28px]' />
                      <span className='text-sm'>From</span>
                      <div className='flex flex-col'>
                        <span className='font-bold leading-6 text-[35px]'>Rs {tour.price}</span>
                        <span className='text-sm '>Per person</span>
                      </div>
                    </div>
                    <div className='p-[25px] flex flex-col gap-6'>
                      <div className='flex items-center'>
                        <div className='w-[70px]'>
                          <FaCalendarAlt className='text-[#468ae7] text-[24px] ' />
                        </div>
                        <p className='font-semibold'>January 10, 2025</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='flex justify-start relative left-3 flex-col gap-1 w-[70px]'>
                          <div className='w-1 h-1 bg-[#C4DBF8] rounded-full'></div>
                          <div className='w-1 h-1 bg-[#468ae7] rounded-full'></div>
                        </div>
                        <p className='text-[13px] text-[#8c8c8c]'>Available: 13 Seats</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-[70px]'>
                          <IoMdBed className='text-[#468ae7] text-[24px] ' />
                        </div>
                        <div className='w-full p-2 border-[2px] border-gray-300'>
                          <select
                            onChange={(e) => handleRoom(parseInt(e.target.value))}
                            className='w-full focus:outline-none'>
                            {rooms.map((x) => (
                              <option value={x} key={x}>
                                {x}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='h-[2px] bg-gray-200 w-full my-3'></div>
                      <div className='flex flex-col gap-1'>
                        {roomData.map((x, i) => {
                          return (
                            <div className='flex items-center' key={i}>
                              <div className='w-[70px] text-xs text-[#8c8c8c]'>Room {i + 1}</div>
                              <div className='flex gap-1 w-full'>
                                <select className='w-full text-sm focus:outline-none border-[2px] border-gray-300 p-2'>
                                  <option>Adult</option>
                                  {people.map((y) => (
                                    <>
                                      <option key={y}>{y}</option>
                                    </>
                                  ))}
                                </select>
                                <select className='w-full text-sm focus:outline-none border-[2px] border-gray-300 p-2'>
                                  <option>Child</option>
                                  {people.map((z) => (
                                    <>
                                      <option key={z}>{z}</option>
                                    </>
                                  ))}
                                </select>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      <div className='h-[2px] bg-gray-200 w-full my-3'></div>
                      <div className='flex items-center'>
                        <div className='flex justify-start relative left-3 flex-col gap-1 w-[70px]'>
                          <div className='w-1 h-1 bg-[#C4DBF8] rounded-full'></div>
                          <div className='w-1 h-1 bg-[#468ae7] rounded-full'></div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-[70px]'>
                          <div className='bg-[#468ae7] relative left-1 h-6 w-6 rounded-full flex justify-center items-center'>
                            <FaCheck className='text-[#ffffff] text-sm ' />
                          </div>
                        </div>
                        <button className='text-sm text-white bg-[#468ae7] w-full h-12 rounded-md'>
                          Proceed Booking
                        </button>
                      </div>
                    </div>
                    <div className='flex justify-center items-center border-t-[1px] border-t-gray-200'>
                      <div className='w-2/3 cursor-pointer flex justify-center text-sm items-center h-12 border-r-[1px] border-r-gray-200 bg-[#FBFBFB] gap-4'>
                        <FaRegHeart /> <span>Save To Wish List</span>
                      </div>
                      <div className='w-1/3 flex justify-center text-sm items-center gap-4'>
                        <IoEyeOutline className='text-[#457BE0] text-lg' /> <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </>
      )}
    </div>
  )
}

export default TourDetail
