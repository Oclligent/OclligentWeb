import './map.css';
import $ from 'jquery';
import ClockSl from '../../Widgets/Clock/clocksl';
import Clock from "../../Widgets/Clock/Clock";
import ClockAu from '../../Widgets/Clock/clockau';
import ClockGr from '../../Widgets/Clock/clockger';
import MapImg from '../../assets/maplight.png';
import Marker_w from '../../assets/map_marker/map_marker1.svg'

const MapContainer = ({ theme }) => {
    $(document).ready(function () {
        $(".position1").hover(
          function () {
            $(".position-details-container2").addClass("noneed");
            $(".position-details-container3").addClass("noneed");
            $(".position-details-container4").addClass("noneed");
            $(".position-details-container1").removeClass("noneed");

            $(".position2").addClass("get_hide");
            $(".position3").addClass("get_hide");
            $(".position4").addClass("get_hide");
            $(".position2").removeClass("get_show");
            $(".position3").removeClass("get_show");
            $(".position4").removeClass("get_show");

            $(".path").addClass("line-hover");
            $(".country-details").addClass("country-hover");
            $(".path").removeClass("line-hover-out");
            $(".country-details").removeClass("country-hover-out");
          },
          function () {
            $(".position2").addClass("get_show");
            $(".position3").addClass("get_show");
            $(".position4").addClass("get_show");
            $(".position2").removeClass("get_hide");
            $(".position3").removeClass("get_hide");
            $(".position4").removeClass("get_hide");

            $(".path").addClass("line-hover-out");
            $(".country-details").addClass("country-hover-out");
            $(".path").removeClass("line-hover");
            $(".country-details").removeClass("country-hover");
          }
        );
    });
    $(document).ready(function () {
        $(".position2").hover(
          function () {
            $(".position-details-container1").addClass("noneed");
            $(".position-details-container3").addClass("noneed");
            $(".position-details-container4").addClass("noneed");
            $(".position-details-container2").removeClass("noneed");

            $(".position1").addClass("get_hide");
            $(".position3").addClass("get_hide");
            $(".position4").addClass("get_hide");
            $(".position1").removeClass("get_show");
            $(".position3").removeClass("get_show");
            $(".position4").removeClass("get_show");

            $(".path").addClass("line-hover");
            $(".country-details").addClass("country-hover");
            $(".path").removeClass("line-hover-out");
            $(".country-details").removeClass("country-hover-out");
          },
          function () {
            $(".position1").addClass("get_show");
            $(".position3").addClass("get_show");
            $(".position4").addClass("get_show");
            $(".position1").removeClass("get_hide");
            $(".position3").removeClass("get_hide");
            $(".position4").removeClass("get_hide");

            $(".path").addClass("line-hover-out");
            $(".country-details").addClass("country-hover-out");
            $(".path").removeClass("line-hover");
            $(".country-details").removeClass("country-hover");
          }
        );
    });
    $(document).ready(function () {
        $(".position3").hover(
          function () {
            $(".position-details-container1").addClass("noneed");
            $(".position-details-container2").addClass("noneed");
            $(".position-details-container4").addClass("noneed");
            $(".position-details-container3").removeClass("noneed");

            $(".position1").addClass("get_hide");
            $(".position2").addClass("get_hide");
            $(".position4").addClass("get_hide");
            $(".position1").removeClass("get_show");
            $(".position2").removeClass("get_show");
            $(".position4").removeClass("get_show");

            $(".path").addClass("line-hover");
            $(".country-details").addClass("country-hover");
            $(".path").removeClass("line-hover-out");
            $(".country-details").removeClass("country-hover-out");
          },
          function () {
            $(".position1").addClass("get_show");
            $(".position2").addClass("get_show");
            $(".position4").addClass("get_show");
            $(".position1").removeClass("get_hide");
            $(".position2").removeClass("get_hide");
            $(".position4").removeClass("get_hide");

            $(".path").addClass("line-hover-out");
            $(".country-details").addClass("country-hover-out");
            $(".path").removeClass("line-hover");
            $(".country-details").removeClass("country-hover");
          }
        );
    });
    $(document).ready(function () {
        $(".position4").hover(
            function () {
                $(".position-details-container1").addClass("noneed");
                $(".position-details-container2").addClass("noneed");
                $(".position-details-container3").addClass("noneed");
                $(".position-details-container4").removeClass("noneed");

                $(".position1").addClass("get_hide");
                $(".position2").addClass("get_hide");
                $(".position3").addClass("get_hide");
                $(".position1").removeClass("get_show");
                $(".position2").removeClass("get_show");
                $(".position3").removeClass("get_show");

                $(".path").addClass("line-hover");
                $(".country-details").addClass("country-hover");
                $(".path").removeClass("line-hover-out");
                $(".country-details").removeClass("country-hover-out");
            },
            function () {
                $(".position1").addClass("get_show");
                $(".position2").addClass("get_show");
                $(".position3").addClass("get_show");
                $(".position1").removeClass("get_hide");
                $(".position2").removeClass("get_hide");
                $(".position3").removeClass("get_hide");

                $(".path").addClass("line-hover-out");
                $(".country-details").addClass("country-hover-out");
                $(".path").removeClass("line-hover");
                $(".country-details").removeClass("country-hover");
            }
        );
    });
    return (
        <div id="map" style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>
            <div className="map-container">
                <img className='mapimg' src={MapImg} alt='map'></img>
                <div className='all-locations'>
                    <div className='position1'>
                        <div className='marker-shadow'></div>
                        <div className='marker-animation1'></div>
                        <div className='marker-animation2'></div>
                        <div className='marker'></div>
                        <img className='markerimg' src={Marker_w} alt='marker'></img>
                        <h5 className='flglbl'>Sri lanka</h5>
                    </div>
                    <div className='position-details-container1 noneed'>
                        <div className='country-details c_mirror'>
                            <div className='country-right'>
                                <div className='address-details ad_mirror'>
                                    <svg width="210" height="20" viewBox="0 0 689 50" fill="none">
                                        <path d="M50.5 25H688.5" stroke="#7F7F7F" stroke-width="6"/>
                                        <circle cx="25" cy="25" r="23" stroke="#7F7F7F" stroke-width="6"/>
                                    </svg>
                                    <p>No 44/5 Aguruwatota Rd,<br></br>
                                    Horana,<br></br>
                                    Sri Lanka</p>
                                </div>
                            </div>
                            <div className='country-left'>
                                <div className='details-topic'>
                                    <h4>Branch of</h4>
                                    <h2>Sri Lanka</h2>
                                </div>
                                <div className='clock-pic cl_mirror'>
                                    <ClockSl status={theme} />
                                </div>
                            </div>
                        </div>
                        <div class="line-container l_mirror">
                            <svg className='line' viewBox="0 0 165 360" fill="none" >
                                <path className='path' d="M163 359.5L75 2H0.5" stroke="#7F7F7F" stroke-width="4"/>
                            </svg>
                        </div>
                    </div>
                    <div className='position2'>
                        <div className='marker-shadow'></div>
                        <div className='marker-animation1'></div>
                        <div className='marker-animation2'></div>
                        <div className='marker'></div>
                        <img className='markerimg' src={Marker_w} alt='marker'></img>
                        <h5 className='flglbl'>USA</h5>
                    </div>
                    <div className='position-details-container2 noneed'>
                        <div class="line-container">
                            <svg className='line' viewBox="0 0 152 349" fill="none">
                                <path className='path' d="M2.5 348L79 2H152" stroke="#7F7F7F" stroke-width="4"/>
                            </svg>
                        </div>
                        <div className='country-details'>
                            <div className='country-left'>
                                <div className='details-topic'>
                                    <h4>Branch of</h4>
                                    <h2>USA</h2>
                                </div>
                                <div className='clock-pic cl_normal'>
                                    <Clock status={theme} />
                                </div>
                            </div>
                            <div className='country-right'>
                                <div className='address-details'>
                                    <svg width="210" height="20" viewBox="0 0 689 50" fill="none">
                                        <path d="M0.5 25H638.5" stroke="#7F7F7F" stroke-width="6"/>
                                        <circle cx="664" cy="25" r="23" stroke="#7F7F7F" stroke-width="6"/>
                                    </svg>
                                    <p>624 NW 13th St, Boca Roton,<br></br>
                                    FL 33486,<br></br>
                                    USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='position3'>
                        <div className='marker-shadow'></div>
                        <div className='marker-animation1'></div>
                        <div className='marker-animation2'></div>
                        <div className='marker'></div>
                        <img className='markerimg' src={Marker_w} alt='marker'></img>
                        <h5 className='flglbl'>Australia</h5>
                    </div>
                    <div className='position-details-container3 noneed'>
                        <div className='country-details c_mirror'>
                            <div className='country-right'>
                                <div className='address-details ad_mirror'>
                                    <svg width="210" height="20" viewBox="0 0 689 50" fill="none">
                                        <path d="M50.5 25H688.5" stroke="#7F7F7F" stroke-width="6"/>
                                        <circle cx="25" cy="25" r="23" stroke="#7F7F7F" stroke-width="6"/>
                                    </svg>
                                    <p>2417 Charoe St, Lewis Center,<br></br>
                                    OH 43035,<br></br>
                                    Australia</p>
                                </div>
                            </div>
                            <div className='country-left'>
                                <div className='details-topic'>
                                    <h4>Branch of</h4>
                                    <h2>Australia</h2>
                                </div>
                                <div className='clock-pic cl_mirror'>
                                    <ClockAu status={theme} />
                                </div>
                            </div>
                        </div>
                        <div class="line-container l_mirror">
                            <svg className='line' viewBox="0 0 165 360" fill="none" >
                                <path className='path' d="M163 359.5L75 2H0.5" stroke="#7F7F7F" stroke-width="4"/>
                            </svg>
                        </div>
                    </div>
                    <div className='position4'>
                        <div className='marker-shadow'></div>
                        <div className='marker-animation1'></div>
                        <div className='marker-animation2'></div>
                        <div className='marker'></div>
                        <img className='markerimg' src={Marker_w} alt='marker'></img>
                        <h5 className='flglbl'>Germany</h5>
                    </div>
                    <div className='position-details-container4 noneed'>
                        <div class="line-container">
                            <svg className='line' viewBox="0 0 152 349" fill="none">
                                <path className='path' d="M2.5 348L79 2H152" stroke="#7F7F7F" stroke-width="4"/>
                            </svg>
                        </div>
                        <div className='country-details'>
                            <div className='country-left'>
                                <div className='details-topic'>
                                    <h4>Branch of</h4>
                                    <h2>Germany</h2>
                                </div>
                                <div className='clock-pic cl_normal'>
                                    <ClockGr status={theme} />
                                </div>
                            </div>
                            <div className='country-right'>
                                <div className='address-details'>
                                    <svg width="210" height="20" viewBox="0 0 689 50" fill="none">
                                        <path d="M0.5 25H638.5" stroke="#7F7F7F" stroke-width="6"/>
                                        <circle cx="664" cy="25" r="23" stroke="#7F7F7F" stroke-width="6"/>
                                    </svg>
                                    <p>Hehnerholt 31, 41069,<br></br>
                                    Mönchengladbach,<br></br>
                                    Germany</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapContainer;