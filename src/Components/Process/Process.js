import React from 'react'
import { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import data from '../../constants/data';
import images from '../../constants/images';
import './Process.css'
import ProcessCard from './ProcessCard';

function Process({ theme }) {

    //scrolling position
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    let position = scrollPosition;

    console.log(scrollPosition); 

    var process_set = 0;
    
    if(position > 1410 && position < 1470){
        process_set = 1;
        console.log("Discovery and Analysis");
    } else if(position > 1470 && position < 1520){
        process_set = 2;
        console.log("UI/UX Design");
    } else if(position > 1520 && position < 1570){
        process_set = 3;
        console.log("Development");
    } else if(position > 1570 && position < 1620){
        process_set = 4;
        console.log("Release");
    } else if(position > 1620 && position < 1670){
        process_set = 5;
        console.log("Maintenance");
    }

    var card1 = document.querySelector(".card1");
    var card2 = document.querySelector(".card2");
    var card3 = document.querySelector(".card3");
    var card4 = document.querySelector(".card4");
    var card5 = document.querySelector(".card5");
    if(process_set === 1){
        card1.classList.add("active-process");
        card2.classList.remove("active-process");
        card3.classList.remove("active-process");
        card4.classList.remove("active-process");
        card5.classList.remove("active-process");
    } else if(process_set === 2){
        card2.classList.add("active-process");
        card1.classList.remove("active-process");
        card3.classList.remove("active-process");
        card4.classList.remove("active-process");
        card5.classList.remove("active-process");
    } else if(process_set === 3){
        card3.classList.add("active-process");
        card1.classList.remove("active-process");
        card2.classList.remove("active-process");
        card4.classList.remove("active-process");
        card5.classList.remove("active-process");
    } else if(process_set === 4){
        card4.classList.add("active-process");
        card1.classList.remove("active-process");
        card2.classList.remove("active-process");
        card3.classList.remove("active-process");
        card5.classList.remove("active-process");
    } else if(process_set === 5){
        card5.classList.add("active-process");
        card1.classList.remove("active-process");
        card2.classList.remove("active-process");
        card3.classList.remove("active-process");
        card4.classList.remove("active-process");
    }

    const i = [images.process1, images.process2, images.process5, images.process3, images.process4];
    const l = [images.light_process_1, images.light_process_2, images.light_process_3, images.light_process_4, images.light_process_5];

    return (
        <div id="process" className="process-body" style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>
            <h1 className='process-title'>Our Software development process</h1>
            <div className="process-body-container">
                <div className='process-section-left'>
                    <Fade bottom className="service-react-reveal">
                        <div className='circle height3 cl2-pr' style={{ display: theme ? 'none' : "block" }}></div>
                        {theme ? <img src={images.rocket1} alt="rocket" className='rocket'/> : <img src={images.rocket1} alt="rocket" />}
                    </Fade>
                </div>
                <div className='process-section'>
                    <div className='card1'><ProcessCard process={data.process1} key={0} image={!theme ? l[0] : i[0]} theme={theme} firstWord={"Discovery & analysis - "}/></div>
                    <div className='card2'><ProcessCard process={data.process2} key={1} image={!theme ? l[1] : i[1]} theme={theme} firstWord={"UI/UX Design - "}/></div>
                    <div className='card3'><ProcessCard process={data.process3} key={2} image={!theme ? l[2] : i[2]} theme={theme} firstWord={"Development - "}/></div>
                    <div className='card4'><ProcessCard process={data.process4} key={2} image={!theme ? l[3] : i[3]} theme={theme} firstWord={"Release - "}/></div>
                    <div className='card5'><ProcessCard process={data.process5} key={4} image={!theme ? l[4] : i[4]} theme={theme} firstWord={"Maintenance - "}/></div>
                </div>
            </div>
        </div>
    )
}

export default Process