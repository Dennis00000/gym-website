import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT OUR GYM</h3>
        <h2>Elevate Your Fitness: Welcome to Joyhaven, Where Every Rep Builds Your Best Self!</h2>
        <p>At Joyhaven, we're dedicated to your holistic fitness journey. Our expert trainers and diverse range of classes cater to all levels, ensuring you reach your goals with support every step of the way. Join our empowering community and unlock your full potential today!</p>
        <p>Joyhaven isn't just a gym; it's a transformative space where progress is celebrated. With personalized programs and a supportive atmosphere, we're here to help you thrive in mind and body. Take the first step towards a healthier, happier you - join us at Joyhaven.</p>
        <p>Discover a new level of fitness at Joyhaven. From dynamic workouts to a welcoming community, we provide the tools and encouragement you need to succeed. Join us and unleash your strength today!</p>
      </div>
    </div>
  )
}

export default About
