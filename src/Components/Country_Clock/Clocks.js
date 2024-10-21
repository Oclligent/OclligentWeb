import React from 'react'
import './Clocks.css';
import { Fade } from 'react-reveal';
import Images from "../../constants/images";
import { AiOutlineArrowRight } from 'react-icons/ai';
import ClockSl from '../../Widgets/Clock/clocksl';
import Clock from "../../Widgets/Clock/Clock";
import ClockAu from '../../Widgets/Clock/clockau';
import ClockGr from '../../Widgets/Clock/clockger';

function Clocks({ theme }) {
    return (
        <div className="clock-container-new" style={{ color: theme ? "white" : "black" }}>
            <div className="clock-container-map">
                <div className="c-con">
                    <Fade right>
                        <div className="clock-div">
                            <ClockSl status={theme} />
                            <div className='flag'>
                                <img src={Images.Srilanka} alt="srilanka" />
                                <span className="contryname">Sri Lanka</span>
                            </div>
                            <div className="clock-div">
                                <span>No 44/5 Aguruwatota Rd,</span>
                                <span>Horana,</span>
                                <span>Sri Lanka </span>
                            </div>

                        </div>
                    </Fade>
                    <Fade right>
                        <div className="clock-div">
                            <Clock status={theme} />
                            <div className='flag'>
                                <img src={Images.Usa} alt="Usa" />
                                <span className="contryname">USA</span>
                            </div>
                            <div className="clock-div">
                                <span>624 NW 13th St, Boca Roton</span>
                                <span>FL 33486</span>
                                <span>USA</span>

                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="clock-div">
                            <ClockAu status={theme} />
                            <div className='flag'>
                                <img src={Images.Aus} alt="australia" />
                                <span className="contryname">Australia</span>
                            </div>
                            <div className="clock-div">
                                <span>2417 Charoe St, Lewis Center</span>
                                <span>OH 43035</span>
                                <span>USA</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="clock-div">
                            <ClockGr status={theme} />
                            <div className='flag'>
                                <img src={Images.german_flag} alt="german" />
                                <span className="contryname">Germany</span>
                            </div>
                            <div className="clock-div">
                                <span>Hehnerholt 31, 41069,</span>
                                <span>Mönchengladbach,</span>
                                <span>Germany</span>
                            </div>
                        </div>
                    </Fade>                        
                </div>
            </div>
            <div className="about-container">
                <div className="col">
                    {theme ? <img src={Images.logo} alt="logo" /> : <img src={Images.light_logo} alt="logo" />}
                    <p>Voxitec is the best choice for
                        innovative, effective technological
                        solutions with quality assured.
                    </p>
                    <img src={Images.protect} alt="logo" style={{ height: '30px', maxWidth: '140px' }} />
                </div>
                <Fade right>
                    <div className="col">
                        <h3 style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>Company</h3>
                        <div className="links">
                            <ul>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>About</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>Services</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>Technologies</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>Contact with Us</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col">
                        <h3 style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>Services</h3>
                        <div className="links">
                            <ul>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>Web Development</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>App Development</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>UI/UX Development</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>DevOps</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col">
                        <h3 style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>Updates</h3>
                        <div className="links">
                            <ul>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>Blog</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>News</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>Careers</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight />
                                    <span>Events</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Clocks