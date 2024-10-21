import React from 'react'
import './IndustriesWeServe.css'
import dark from '../../constants/industries_data_dark'
import light from '../../constants/industries_data_light'

function IndustriesWeServe({ theme }) {
  const section_1 = theme ? [dark[0], dark[1], dark[4], dark[3]] : [light[0], light[1], light[4], light[3]]
  const section_2 = theme ? [dark[2], dark[5], dark[6], dark[7]] : [light[2], light[5], light[6], light[7]]
  return (
    <div id="industries" className='industries-we-serve-body' style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>

      <div className='industries-title-container'>
        <h1 className='industries-title'>Industries We Serve</h1>
      </div>

      <div className='industries-data-container'>

        {
          section_1.map((section, index) => {
            return <div className='insustry-card' key={index}>
              <img src={section.image} alt="industry-card" />
              <h2>{section.title}</h2>
            </div>
          })
        }

        {
          section_2.map((section, index) => {
            return <div className='insustry-card' key={index}>
              <img src={section.image} alt="industry-card" />
              <h2>{section.title}</h2>
            </div>
          })
        }


      </div>
    </div>
  )
}

export default IndustriesWeServe