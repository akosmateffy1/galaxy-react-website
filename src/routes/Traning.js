import React from 'react'
import HeroImages from '../components/HeroImages'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TraningSection from '../components/Traning'

const Traning = () => {
  return (
    <div>
        <Navbar />
        <HeroImages heading='TRANING.' text='Pre-flight & in-flight Traning.' />
        <TraningSection/>
        <Footer />
    </div>
  )
}

export default Traning