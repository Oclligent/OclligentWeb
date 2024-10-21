import React from 'react'
import "./ServiceCardSmallScreen.css"
import $ from 'jquery';
function ServiceCardSmallScreen({service}) {
  $(document).ready(function () {
    $(".small-screen-service-card").hover(
      function () {
        $(this).addClass("box-hover");
      },
      function () {
        $(this).removeClass("box-hover");
      }
    );
  });
  return (
    <div className='small-screen-service-card'>
      <div className='samelevel'>
        <div className='service-card-image-wrapper'>
            <img src={service.image} alt="service"/>
        </div>
        <div style={{display :"flex"}}/>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div className="read-more-button"><p>Read More</p></div>
    </div>
  )
}

export default ServiceCardSmallScreen