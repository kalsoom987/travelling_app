import Banner from '@/components/TourList/Banner'
import TourList from '@/components/TourList/TourList'
import Footer from '@/components/shared/Footer/Footer'
import Header from '@/components/shared/Header/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <TourList />
      <Footer />
    </>
  )
}

export default page
