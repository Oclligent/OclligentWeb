import React from 'react'
import './Body.css'
import data from '../../../constants/data'
import images from '../../../constants/images'
import { Fade } from 'react-reveal'
function Body({ theme }) {
    return (
        <div className='home-body' style={{ color: theme ? 'white' : 'black' }}>
            <div className='circle height1 cl1' style={{ display: theme ? 'none' : "block" }}></div>
            {/* <div className='circle height1 cl2' style={{display : theme ? 'none' : "block" }}></div> */}
            <div className='circle height2 cl3' style={{ display: theme ? 'none' : "block" }}></div>
            <div className='section' id="left">
                <div className='wrapper'>
                    <h1 className='title'>Innovative, Effective<br></br>With Quality<br></br>Assured3 </h1>
                    <div className='small-screen-image'>
                        <img src={images.coding} alt='home' className='home-image' />
                    </div>
                    <p className='description'>{data.home_description}</p>
                    {!theme?<Fade right><div className='get-started-button'><h3>Let's Talk</h3></div></Fade>:
                    <Fade right><div className='get-started-button-dark'><h3>Let's Talk</h3></div></Fade>
                    }
                </div>
            </div>
            <Fade bottom>
                <div className='section'>
                    <div className='image-container'>
                        <div className='circle height1 cl2' style={{ display: theme ? 'none' : "block" }}></div>
                        <img src={images.tenor} alt='home' className='home-image' />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Body