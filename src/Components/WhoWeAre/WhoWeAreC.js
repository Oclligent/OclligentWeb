import React from 'react'
import './WhoWeAreC.css'
import WhoWeAreBody from './WhoWeAreBody/WhoWeAreBody'
import WhoWeAreTop from './WhoWeAreTop/Top'
function WhoWeAre({theme}) {
  return (
    <div id="hwa" className="whoweare-container" style={{ backgroundColor:theme ? 'black' : 'white'}}>
        <WhoWeAreTop theme={theme}/>
        <WhoWeAreBody theme={theme}/>
    </div>
  )
}

export default WhoWeAre