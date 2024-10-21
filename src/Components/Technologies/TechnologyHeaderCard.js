import React from 'react'
import { Fade } from 'react-reveal'
import './TechnologyHeaderCard.css'
function TechnologyHeaderCard({ activeIndex, index, title, setActiveIndexFunction }) {
  return (
    <Fade bottom>
      <div className='technology-header-card' onClick={() => setActiveIndexFunction(index)}>

        <p>{title}</p>
        <div className="under-line" style={{ backgroundColor: activeIndex === index ? "#00C1FF" : "grey" }} />

      </div>
    </Fade>
  )
}

export default TechnologyHeaderCard