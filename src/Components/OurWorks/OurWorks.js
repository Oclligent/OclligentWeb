import React from 'react'
import './OurWorks.css'
import our_works from '../../constants/our_works'
import Slider from 'react-slick'
import OurWorkCard from './OurWorkCard'
import { Fade } from 'react-reveal'


function OurWorks({ theme }) {
  var settings = {
    dots: true,
    infinite: true,
    fade: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: theme ? true : true,
    arrows: false,
    appendDots: dots => (
      <div className='slick-dots'>
        <ul className='dotlist'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='dotsmodel' 
      style={{ 
        backgroundColor: theme ? "black" : "white",
        border: theme ? "2px #FFFFFF solid" : "2px #000000 solid" 
      }}
      >
      </div>
    )
  };
  
  return (
    <div id="our works" className='our-works-body' style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>
      <Fade bottom>
        <div className='title-container-ow'>
          <h1 className='title-ow'>Our Works</h1>
        </div>
      </Fade>
      <div className='our-works-body-container'>
        <div className='our-works-gradient-box'>
          <Slider {...settings} className="carauesel">
            {
              our_works.map((work, index) => {
                return <OurWorkCard work={work} key={index} />
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default OurWorks