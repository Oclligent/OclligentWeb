import React, { useState } from 'react'
import './Technologies.css'
import t from '../../constants/technologies';
import light_technologies from '../../constants/light_technologies';
import TechnologyHeaderCard from './TechnologyHeaderCard';
import TechnologyBox from './TechnologyBox';
import { Fade } from 'react-reveal';
function Technologies({ theme }) {
    const sections = ["Design", "DevOps", "Database", "Font End", "Back End", "Mobile", "CMS"];
    const technologies = [
        [t[15], t[1],  t[2], t[29], t[30],],
        [t[32], t[26], t[22],],
        [t[16], t[20],  t[28], t[25], t[13],t[10], t[25], t[20],  t[28], t[13]],
        [t[9], t[31], t[6], t[5], t[24],],
        [t[14], t[12], t[23], t[17], t[22]],
        [t[3], t[7], t[0], t[21], t[11], t[27],],
        [t[4], t[8], t[19]],
    ];
    const lightTechs = [
        [light_technologies[15], light_technologies[1], light_technologies[2], light_technologies[29],  light_technologies[30],],
        [light_technologies[32], light_technologies[26], light_technologies[22],],
        [light_technologies[16],light_technologies[20], light_technologies[28], light_technologies[25], light_technologies[13],  light_technologies[10], light_technologies[25],light_technologies[20], light_technologies[28], light_technologies[13]],
        [light_technologies[9], light_technologies[31], light_technologies[6], light_technologies[5], light_technologies[24],],
        [light_technologies[14], light_technologies[12], light_technologies[23], light_technologies[17], light_technologies[18]],
        [light_technologies[3], light_technologies[7], light_technologies[0], light_technologies[21], light_technologies[11], light_technologies[27],],
        [light_technologies[4], light_technologies[8], light_technologies[19]],
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const setActiveIndexFunction = (index) => {
        setActiveIndex(index)
    }
    return (
        <div id="technology" className='technologies-body' style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>
            <Fade bottom>
                <div className='technologies-title-container'>
                    <h1 className="technologies-title">Technologies we work with</h1>
                </div>
            </Fade>
            <div className='technology-body-container'>
                <div className='technology-header-bar'>
                    <div className='spacer' />
                    <div className='th-header'>
                        {
                            sections.map((section, i) => {
                                return <TechnologyHeaderCard activeIndex={activeIndex} index={i} title={section} setActiveIndexFunction={setActiveIndexFunction} />
                            })
                        }
                    </div>
                    <div className='spacer' />
                </div>
                <div className='technologies-gradient-box' style={{ background: theme ? 'linear-gradient(180deg, #8d8c8c80 0%, #000000 75.03%)' : 'transparent' }}>
                    <div className='technology-data-bar'>
                        <TechnologyBox technologies={!theme ? lightTechs[activeIndex] : technologies[activeIndex]} theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies