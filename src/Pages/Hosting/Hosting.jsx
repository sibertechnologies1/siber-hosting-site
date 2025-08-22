import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import HostingHero from '../../Components/HostingHero/HostingHero'
import HostingBuild from '../../Components/HostingBuild/HostingBuild'
import Footer from '../../Components/Footer/Footer'
import HostingGrid1 from '../../Components/HostingGrid1/HostingGrid1'
import HostingGrid2 from '../../Components/HostingGrid2/HostingGrid2'
import HostingBanner from '../../Components/HostingBanner/HostingBanner'



function Hosting() {
  return (
    <div className=' mt-16'>
      <Header />
      <Navbar />
          
      <HostingHero />
      <HostingBuild />
      <HostingGrid1 />
      <HostingGrid2 />
      <HostingBanner />
      <Footer />
    </div>
  )
}

export default Hosting
