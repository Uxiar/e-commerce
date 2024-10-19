import React from 'react'
import ContentWrapper from './ContentWrapper'
import Navbar from './Navbar'
import Hero from './Hero'
import Offer from './Offer'
import Display from './Display'
import Footer from './Footer'
import Bestsellers from './BestSellers'

const Home = () => {
  return (
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>  
   
     <Navbar/>
     
      <Hero/>
   
    <Offer/>
    < Display/>
    < Bestsellers/>
    <Footer/>
  </div>
  )
}

export default Home;