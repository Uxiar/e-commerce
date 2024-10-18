import React from 'react'
import heroImg from "../assets/hero.png"
import ContentWrapper from './ContentWrapper';

const Hero = () => {
  return (
    <ContentWrapper>
      <div className='grid grid-cols-2 justify-between'>
        <div className='mt-32'>
          <h1 className='text-8xl mb-5'>Customized Printed Tees</h1>
          <p className='text-xl mb-10'>Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.</p>
          <button className='border rounded-2xl p-5 text-neutral-100 bg-red-600'>&gt;&gt; EXPLORE STORE</button>
        </div>
        <div>
          <img src={heroImg} alt='hero_img'  />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Hero;