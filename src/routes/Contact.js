import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImage from '../components/HeroImages'
import Navbar from '../components/Navbar'
const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
        <Form/>
        <Footer />
    </div>
  )
}

export default Contact