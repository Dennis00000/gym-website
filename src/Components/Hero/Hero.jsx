import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Unlock Your Potential: Welcome to Joyhaven - Where Strength Meets Purpose!</h1>
        <p>Welcome to Joyhaven, your destination for fitness excellence. With top-notch facilities and expert guidance, we're here to help you reach your goals. Join us and let's make progress together</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
