import React from 'react'
import './WhoWeAreBody.css'
import images from '../../../constants/images'
import data from '../../../constants/data'
import { Fade } from 'react-reveal'
function WhoWeAre({ theme }) {
    return (
        <div className='who-we-are-body' style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}>
            <div className='title-container'>
                <h1>Who We Are</h1>
            </div>
            <div className='center'>
                <div className='description-container'>
                    <p>{data.who_are_we_description}</p>
                    <div className='spacer-hw' style={{width:"100%", height:"25px"}}></div>
                    <p>{data.who_are_we_description_2}</p>
                </div>
                <div className='image-container-hw'>
                    <Fade right>
                        <div className='who-we-are-image-wrapper'>
                        <div className='circle height1 cl2-wh'  style={{display : theme ? 'none' : "block" }}></div>
                            <img src={images.descriptionimage} alt="description" className='who-we-are-image' />
                        </div>
                    </Fade>
                </div>
            </div>
            <div className='bottom'>
                <Fade bottom>
                    <div className='vission-section'>
                        <div className='small-image-wrapper'>
                            <img src={images.vission} alt='vission' />
                        </div>
                        <h2>Vision</h2>
                        <p>{data.vision}</p>
                    </div>
                    <div className='vission-section'>
                        <div className='small-image-wrapper'>
                            <img src={images.mission} alt='mission' />
                        </div>
                        <h2>Mission</h2>
                        <p>{data.mission}</p>
                    </div>
                </Fade>
            </div>
            <div className='image-container-hw-sm'>
                <Fade right>
                    <div className='who-we-are-image-wrapper'>
                    <div className='circle height1 cl2-wh'  style={{display : theme ? 'none' : "block" }}></div>
                        <img src={images.descriptionimage} alt="description" className='who-we-are-image' />
                    </div>
                </Fade>
            </div>
            {/* <div className='small-screen-bottom-who-are-we-image-wrapper'>
            <img src={images.descriptionimage} alt="description" className='who-we-are-image'/>
        </div> */}
        </div>
    )
}

export default WhoWeAre