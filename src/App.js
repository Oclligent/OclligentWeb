import React from "react";
import './App.css';
import { useState, useEffect } from 'react';
import Chat from "./Components/ChatBox/Chatbox";
import Home from "./Components/Home/Home";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAreC";
import Process from "./Components/Process/Process";
import Services from "./Components/Services/Services";
import Technologies from "./Components/Technologies/Technologies";
import IndustriesWeServe from "./Components/IndustriesWeServe/IndustriesWeServe";
import OurWorks from "./Components/OurWorks/OurWorks";
import Contact from "./Components/Contact/Contact";
import Map from "./Components/map/map";
import Clocks from "./Components/Country_Clock/Clocks";
import Footer from "./Components/footer/footer";

function App() {
  const [dark, activeDark] = useState(true)
  const changeTheme = (theme) => {
    activeDark(theme)
  }

  useEffect(() => {
    const d = new Date();
    let time = d.getTime();
    var date = new Date(time);
    var a = date.toString().split(" ")[4]
    var hour = a.toString().split(":")[0]
    hour = parseInt(hour)
    
    if(hour <= 12){
      if(hour>6 && hour <= 12){
        activeDark(false)
      }else{
        activeDark(true)
      }
    }else{
      if(hour>18 && hour <24){
        activeDark(true)
      }else{
        activeDark(false)
      }
    }
    //console.log(isBetween);
  }, [])

  

  return (
    <div className='fillBody' style={{ background: dark? 'black' : 'white' }}>
      <div className='mainDiv'>
        <Chat theme={dark} />
        <Home theme={dark} changeTheme={changeTheme} />
        <WhoWeAre theme={dark} />
        <Process theme={dark} />
        <Services theme={dark} />
        <Technologies theme={dark} />
        <IndustriesWeServe theme={dark} />
        <OurWorks theme={dark} />
        {/* <Blog theme={dark} /> */}
        <Contact theme={dark} />
        <Map theme={dark} />
        <Clocks theme={dark} />
        <Footer theme={dark} />
        {/* <Clock/> */}
      </div>
    </div>
  );
}

export default App;
