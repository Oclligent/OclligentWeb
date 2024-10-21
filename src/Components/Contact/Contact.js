import React, { useState } from 'react'
//import Title from '../../Widgets/Title/Title'
import "./Contact.css"
import sri_lanka from '../../assets/Ellipse 64.svg'
import usa from '../../assets/usa 1.svg'
import america from '../../assets/america.png'
import germany from '../../assets/germany.png'
//import client_image from '../../assets/Client Photo.svg'
import { AiOutlinePaperClip, AiTwotoneMail } from 'react-icons/ai';
import { AiFillSkype } from 'react-icons/ai';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import jQuery from 'jquery';
import feedback from '../../constants/feedback'
import Slider from 'react-slick'
import SwitchCard from './SwitchCarousel/SwitchCard'
//import Clock from '../../Widgets/Clock/Clock'
//import { Fade } from 'react-reveal'

function Contact({ theme }) {
  const [value, setValue] = useState();
  const [index1, setindex1] = useState(false)
  const [index2, setindex2] = useState(false)
  const [index3, setindex3] = useState(false)
  const [index4, setindex4] = useState(false)
  const [index5, setindex5] = useState(false)
  const [index6, setindex6] = useState(false)

  function inputFocus(elemIndex){
    if (elemIndex===1){
      setindex1(true);
      setindex2(false);
      setindex3(false);
      setindex4(false);
      setindex5(false);
      setindex6(false);
    }else if (elemIndex===2){
      setindex1(false);
      setindex2(true);
      setindex3(false);
      setindex4(false);
      setindex5(false);
      setindex6(false);
    }else if (elemIndex===3){
      setindex1(false);
      setindex2(false);
      setindex3(true);
      setindex4(false);
      setindex5(false);
      setindex6(false);
    }else if (elemIndex===4){
      setindex1(false);
      setindex2(false);
      setindex3(false);
      setindex4(true);
      setindex5(false);
      setindex6(false);
    }else if (elemIndex===5){
      setindex1(false);
      setindex2(false);
      setindex3(false);
      setindex4(false);
      setindex5(true);
      setindex6(false);
    }else if (elemIndex===6){
      setindex1(false);
      setindex2(false);
      setindex3(false);
      setindex4(false);
      setindex5(false);
      setindex6(true);
    }
  }

  jQuery(function($){
    $('.input').click(function(e){
      //click inside
      e.stopPropagation(); // Prevent bubbling
    });
    $(document).click(function() {
      setindex1(false);
      setindex2(false);
      setindex3(false);
      setindex4(false);
      setindex5(false);
      setindex6(false);
    });
  });

  if(theme){
    document.documentElement.style.setProperty('--border-color', 'white');
  }else{
    document.documentElement.style.setProperty('--border-color', 'black');
  }

  if(theme){
    if(index3){
      document.documentElement.style.setProperty('--phone-border', '#00AEEF');
      document.documentElement.style.setProperty('--phone-border-width', '2px');
    }else{
      document.documentElement.style.setProperty('--phone-border', 'white');
      document.documentElement.style.setProperty('--phone-border-width', '1px');
    }
  }else{
    if(index3){
      document.documentElement.style.setProperty('--phone-border', '#00AEEF');
      document.documentElement.style.setProperty('--phone-border-width', '2px');
    }else{
      document.documentElement.style.setProperty('--phone-border', 'black');
      document.documentElement.style.setProperty('--phone-border-width', '1px');
    }
  }

  if(theme){
    if(index6){
      document.documentElement.style.setProperty('--textarea-border', '#00AEEF');
      document.documentElement.style.setProperty('--textarea-border-width', '2px');
    }else{
      document.documentElement.style.setProperty('--textarea-border', 'white');
      document.documentElement.style.setProperty('--textarea-border-width', '1px');
    }
  }else{
    if(index6){
      document.documentElement.style.setProperty('--textarea-border', '#00AEEF');
      document.documentElement.style.setProperty('--textarea-border-width', '2px');
    }else{
      document.documentElement.style.setProperty('--textarea-border', 'black');
      document.documentElement.style.setProperty('--textarea-border-width', '1px');
    }
  }

  let slidingState = false;
  function sliding(){
    const cbc = document.querySelector('.contact-body-container');
    if(slidingState){
      cbc.classList.add('leftNow');
      cbc.classList.remove('rightNow');
      slidingState = !slidingState;
    }else{
      cbc.classList.add('rightNow');
      cbc.classList.remove('leftNow');
      slidingState = !slidingState;
    }
  }

  var settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    appendDots: dots => (
      <div className='slick-dots'>
        <ul className='dotlist'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='dotsmodel' 
      style={{ 
        backgroundColor: "gray",
        borderWidth: "0px" 
      }}
      >
      </div>
    )
  };

  return (
    <div id="contact" className='contact-body' style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>
      <div className='title-container-con'>
        <h1 className='title-ow'>Contact</h1>
      </div>
      <div className="contact-body-container leftNow" id='contactus' style={{ backgroundColor: !theme ? "#DFE9F5" : "#404040", color: theme ? "white" : "#121212"}} >
        <div className='switch-slider'>
          <div className='top-content-h1'>
            <h1>Lets Discuss your <br></br>Project
            <img alt='arrow_img'></img>
            </h1>
          </div>
          <div className='top-content-box'>
            <Slider {...settings} className="">
              {
                feedback.map((feeddetails, index) => {
                  return <SwitchCard feeddetails={feeddetails} key={index} />
                })
              }
            </Slider>
          </div>
          <div className='bottom-content-slider'>
            <img alt='left_img'></img>
          </div>
          <div className='arrow-circle' onClick={sliding}>
            <div className='slider-arrow'></div>
          </div>
        </div>
        <div className='contact-body-left'>
          <form action="" className='contact-form'>
            <h3 className='top-word'>Let’s Discuss</h3>
            <div className="input-container icf" style={{ color: theme ? "white" : "#121212"}}>
              <label for="fname">Full Name :<span className='required'>*</span></label>
              <input type="text" name="name" id="fname" onFocus={() => inputFocus(1)} className='input' placeholder='John Smith' required style={{ color: theme ? "white" : "#121212", borderBottom: theme ? (index1? "2px solid #00AEEF" : "1px solid white") : (index1? "2px solid #00AEEF" : "1px solid black")}} />
            </div>
            <div className="input-container" style={{ color: theme ? "white" : "#121212" }}>
              <label for="email">Email :<span className='required'>*</span></label>
              <input type="text" name="email" id="email" onFocus={() => inputFocus(2)} className='input' placeholder='johnsmith@gmail.com' required style={{ color: theme ? "white" : "#121212", borderBottom: theme ? (index2? "2px solid #00AEEF" : "1px solid white") : (index2? "2px solid #00AEEF" : "1px solid black")}} />
            </div>
            <div className="input-container" style={{ color: theme ? "white" : "#121212"}} >
              <div className='phonebudget'>
                <div className='phonesection'>
                  <label for="phone">Phone :<span className='required'>*</span></label>
                  <PhoneInput
                    defaultCountry='LK'
                    placeholder="mobile number"
                    value={value}
                    name="phone"
                    id="phone"
                    limitMaxLength='10'
                    onChange={setValue}
                    className='input'
                    required
                    onFocus={() => inputFocus(3)}
                    style={{ color: theme ? "white" : "#121212" }}
                    inputStyle={{ color: theme ? "white" : "#121212" }}
                  />
                </div>
                <div className='budgetsection'>
                  <label for="service">Select a budget :<span className='required'>*</span></label>
                  <select className='input budgetselector' name="service" id="service" placeholder='✔ Select' required onFocus={() => inputFocus(4)} style={{ color: theme ? "white" : "#121212", borderBottom: theme ? (index4? "2px solid #00AEEF" : "1px solid white") : (index4? "2px solid #00AEEF" : "1px solid black")}}>
                    <option>$1000</option>
                    <option>$1500</option>
                    <option>$2500</option>
                    <option>$5000</option>
                    <option>$10,000</option>
                  </select>
                </div>
              </div>              
            </div>
            <div className="input-container" style={{ color: theme ? "white" : "#121212" }}>
              <label for="service">Select a Service :<span className='required'>*</span></label>
              <select className='input selector' name="service" id="service" placeholder='✔ Select' required onFocus={() => inputFocus(5)} style={{ color: theme ? "white" : "#121212", borderBottom: theme ? (index5? "2px solid #00AEEF" : "1px solid white") : (index5? "2px solid #00AEEF" : "1px solid black")}}>
                <option>Web Development</option>
                <option>App Development</option>
                <option>E-Commerce Development</option>
                <option>UI/UX Design</option>
                <option>DevOps</option>
              </select>
            </div>
            <div className='input-container txt-container' style={{ color: theme ? "white" : "#121212", borderBottom: "none" }}>
              <label for="dis">Describe your project in short :<span className='required'>*</span></label>
              <textarea name="description" id="dis" cols="10" rows="4" className='input' required placeholder='What use cases do you have in mind *' onFocus={() => inputFocus(6)} style={{ color: theme ? "white" : "#121212" }} />
            </div>
            <div className='attach-btn'>
              <a href='../'><AiOutlinePaperClip /></a>
            </div>
            <div className="button-div">
              <input type="submit" value="Let’s Discuss Your Project" name="submit" className="submit-button input" />
            </div>
          </form>
        </div>
        <div className='contact-body-right'>
          <div className='number-container'>
            <h3 style={{ color: theme ? "white" : "black"}}>Let’s Talk</h3>
            <h1 style={{ color: theme ? "white" : "black"}}>Speak with Expert <br></br> Engineers</h1>
            <div className='flag-container'>
              <div className='contact-row'>
                <div className='contact-card'>
                  <img src={sri_lanka} alt="usa" />
                  <div className='contact-details-text'>
                    <p>Call :</p>
                    <p>+94 71 427 3930</p>
                  </div>
                </div>
                <div className='contact-card rcc'>
                  <img src={usa} alt="usa" />
                  <div className='contact-details-text'>
                    <p>Call :</p>
                    <p>+1 (561) 859-9201</p>
                  </div>
                </div>
              </div>
              <div className='contact-row'>
                <div className='contact-card'>
                  <img src={america} alt="australia" />
                  <div className='contact-details-text'>
                    <p>Call :</p>
                    <p>+61 433 816 925</p>
                  </div>
                </div>
                <div className='contact-card rcc'>
                  <img src={germany} alt="germany" />
                  <div className='contact-details-text'>
                    <p>Call :</p>
                    <p>+49 176 69246345</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='dash-line-container'>
            <p className='dash-line'>---------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            </div>
            <div className='contact-row'>
              <div className='contact-card'>
                <div className="contact-icon-wrapper">
                  <AiTwotoneMail color='black' fontSize={25} />
                </div>
                <p className='contact-details-text'>
                  Email : <br />
                  info@voxitec.com
                </p>
              </div>
              <div className='contact-card rcc'>
                <div className="contact-icon-wrapper">
                  <AiFillSkype color='black' fontSize={25} />
                </div>
                <p className='contact-details-text'>
                  Skype : <br />
                  +94 760 8888
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact