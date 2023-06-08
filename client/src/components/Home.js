import React from 'react'
import Hero from './Hero';
import Featured from './Featured';
import data from '../data'
import Subscribe from './Subscribe';
import Brands from './Brands';
import Footer from './Footer';
import FooterBottom from './FooterBottom';


function Home() {
    // const featuredMap = data.map(item => {
    //     return <Featured
    //     key={item.id}
    //     image={item.image} 
    //     title = {item.title}
    //     price = {item.price}
    //     />
    //   })
  return (
    <>
      <Hero/>
      <Featured/>
      <Subscribe/>
      <Brands/>
      <Footer/>
      <FooterBottom/>
    </>
  )
}

export default Home