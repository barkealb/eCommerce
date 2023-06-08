import React from 'react'
import myPromoPic from '../pictures/StyleWise.png'

function Subscribe() {
  return (
    <div className='subscription'>
        <img src={myPromoPic} alt='promo pic' className="subscribe-img"/>
        <button className="sub-button">Shop New Arrivals</button>
    </div>
  )
}

export default Subscribe