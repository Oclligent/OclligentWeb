import React from 'react'
import './TechnologyBox.css'
function TechnologyBox({technologies,theme}) {
  return (
    <div className='technology-box-body'>
        {/* <div style={{flex : 1}}/> */}
        {
            technologies.map((technology,index)=>{
                return <div className="technology-index-wrapper" key={index}>
                        <img alt="technology box" src={technology.value} style={{fill :"black"}}/>
                        <p>{technology.name}</p>
                </div>
            })
        }
        {/* <div style={{flex : 1}}/> */}
    </div>
  )
}

export default TechnologyBox;