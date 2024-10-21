import React from 'react'
import './ProcessCard.css'
function ProcessCard({process,image,theme,firstWord}) {
  return (
    <div className='process-card'>
        <div className='process-image-container'> 
            <img src={image} alt="process" className='process-image'/>
        </div> 
        <div className='process-data-container'>
            <p className='pcr'><b className='pcr'>{firstWord}</b>{process}</p>
        </div>
    </div>
  )
}

export default ProcessCard