import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>123 Acme St.</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />1-2000-123-123</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />trip@galagy.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About us company</h4>
                <p>
                    "lorem ipsum dolor sit amet, sconsectruer
                    adipisciopt elit sed do eisumod tempor incidicdunt ut labore
                    et dolore magna aligqua ut enim ad minim velami"
                </p>
                <div className='social'>
                    <FaFacebook size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaTwitter size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaLinkedin size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer