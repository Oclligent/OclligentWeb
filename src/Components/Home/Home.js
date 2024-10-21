import React from 'react'
import './Home.css'
import Body from './Body/Body'
import Navbar from './Navbar/Navbar'
function Home({theme,changeTheme}) {
  return (
    <div id="home" className="home-container" style={{ backgroundColor:theme ? 'black' : 'white'}}>
        <Navbar theme={theme} changeTheme = {changeTheme}/>
        <Body theme={theme}/>
    </div>
  )
}

export default Home