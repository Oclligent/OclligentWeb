import './House.css';
import {init2} from './utils/initHouseLayer'
import {useEffect} from 'react'

function House() {
    useEffect(() => {
      init2();
    }, []);

    return (
      <div className="house-body">
        <div className="container1">
          <p className="header">Let's Fly Higher</p>
          <p className="info">Dronestone provide high<br></br>quality drone for movie making<br></br>
          production up professional<br></br>and box office needs.</p>
          <div className='project-btn'>
            <button className="lm">Learn More</button>
            <button className="sn">Shop Now</button>
          </div>
        </div>
        <canvas id="webgl_house"></canvas>
      </div>
    )
}

export default House;