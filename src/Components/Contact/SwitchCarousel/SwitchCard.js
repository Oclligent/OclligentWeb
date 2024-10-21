import React from 'react'
import "./SwitchCard.css"
import comma from '../../../assets/contactImgs/comma.png'

function SwitchCard({feeddetails}) {
    return (
        <div id="feedbackcard">
            <img src={comma} className='comma' alt='comma'></img>
            <p className='con-info'>
              {feeddetails.coninfo}
            </p>
            <div className='con-bottom'>
              <div className='first'>
                <h1 className='title-con-bottom'>{feeddetails.name}</h1>
                <h1 className='sub-con-bottom'>{feeddetails.post}</h1>
              </div>
              <div className='second'>
                <img src={feeddetails.pic} alt='bw'></img>
              </div>
            </div>
        </div>
    )
}

export default SwitchCard