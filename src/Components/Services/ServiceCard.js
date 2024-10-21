import React from 'react'
import './ServiceCard.css'
import $ from 'jquery';
function ServiceCard({service}) {
  $(document).ready(function () {
    $(".service-card").hover(
      function () {
        $(this).addClass("box-hover");
      },
      function () {
        $(this).removeClass("box-hover");
      }
    );
  });
  return (
    <div className='service-card'>
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

export default ServiceCard