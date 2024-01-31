import Banner from '@/components/Home/Banner'
import Footer from '@/components/shared/Footer/Footer'
import Header from '@/components/shared/Header/Header'
import Service from '@/components/Home/Service'
import SearchTour from '@/components/Home/SearchTour'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Service/>
      <SearchTour/>
      <Footer />
      
    </>
  )
}
