import React from 'react'
import {Link} from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

import './TraningStyles.css'

const Traning = () => {
  return (
    <div className='traning'>
        <div className='left'> 
            <h1>Traning</h1>
            <p>Thorought traning a necessity when traveling to space. we offer</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Moon} className='img1' alt='/' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} className='img1' alt='/' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Traning