import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImages from '../components/HeroImages'


const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImages heading='PRICING.' text='Choose your trip.'/>
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing