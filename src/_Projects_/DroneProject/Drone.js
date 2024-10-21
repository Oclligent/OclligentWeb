import './Drone.css'
import {init1} from './utils/initDroneLayer'
import {useEffect} from 'react'

function Drone() {
    useEffect(() => {
      init1();
    }, [])

    return (
      <div className="drone-body">
        <div className="container1">
          <p className="header">Let's Fly Higher</p>
          <p className="info">Dronestone provide high<br></br>quality drone for movie making<br></br>
          production up professional<br></br>and box office needs.</p>
          <div className='project-btn'>
            <button className="lm">Learn More</button>
            <button className="sn">Shop Now</button>
          </div>
        </div>
        <canvas id="webgl_drone"></canvas>
      </div>
    )
}

export default Drone;