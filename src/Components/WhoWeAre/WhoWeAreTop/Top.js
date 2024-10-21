import React from 'react'
import './Top.css'
import home_bar from '../../../constants/home_bar'
function WhoWeAreTop({ theme }) {
  return (
    // <marquee scrolldelay="1" direction="left" style={{backgroundColor:"#1D1D1D"}} behavior="scroll" scrollamount="4">
    <div className="marquee">
      <div className="track">
        <div className='footer' style={{ backgroundColor: !theme ? "#1D1D1D" : "#1D1D1D"}}>
          {
            home_bar.map((technology, index) => {
              return (
                <div className='technology-card' key={index}>
                    <img src={technology} alt="technology" className='technologyimg' />
                  <div style={{ flex: 1 }} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    // </marquee>
  )
}

export default WhoWeAreTop