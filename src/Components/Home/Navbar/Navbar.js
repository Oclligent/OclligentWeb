import { React } from 'react'
import './Navbar.css'
import $ from 'jquery';
import images from '../../../constants/images'
import service from '../../../assets/menu_icons/service/sevice_theme.svg'
function Navbar({ theme, changeTheme }) {  
    if(!theme){
        document.documentElement.style.setProperty('--theme-element-color', 'black');
        document.documentElement.style.setProperty('--nav-link-a-hover', '#c9d5da');
        document.documentElement.style.setProperty('--link-set-bg', '#B6CBD4');
    }else{
        document.documentElement.style.setProperty('--theme-element-color', 'white');
        document.documentElement.style.setProperty('--nav-link-a-hover', '#2b363f');
        document.documentElement.style.setProperty('--link-set-bg', '#293241');
    }
    if(!theme){
        if(window.innerWidth <= 970){
            document.documentElement.style.setProperty('--menu-bg-color', '#B6CBD4');
        }else{
            document.documentElement.style.setProperty('--menu-bg-color', 'white');
        }
    }else{
        if(window.innerWidth <= 970){
            document.documentElement.style.setProperty('--menu-bg-color', '#293241');
        }else{
            document.documentElement.style.setProperty('--menu-bg-color', '#1d1d1d');
        }
    }
    let menuOpen = false;
    $(document).ready(function () {
        $(".menu-btn").click(
            function () {
                if(!menuOpen) {
                    $(".menu-btn").addClass('open');
                    $(".link-set").removeClass('sethide');
                    $(".link-set").addClass('setshow');
                    menuOpen = true;
                }else {
                    $('#showMega1').prop('checked', false);
                    $('#showMega2').prop('checked', false);
                    $('#showMega3').prop('checked', false);
                    $('#showMega4').prop('checked', false);
                    $('#showMega5').prop('checked', false);
                    $(".more-arrow2").removeClass('rotate-arrow');
                    $(".more-arrow3").removeClass('rotate-arrow');
                    $(".more-arrow4").removeClass('rotate-arrow');
                    $(".menu-btn").removeClass('open');
                    $(".link-set").addClass('sethide');
                    $(".link-set").removeClass('setshow');
                    menuOpen = false;
                }
            }
        );
    });

    window.addEventListener('click', function(e){   
        if (document.querySelector('.menu-btn').contains(e.target)){
            //inside clicking
        }else {
            if (document.querySelector('.link-set').contains(e.target)){
                //inside clicking
            } else{
                $('#showMega1').prop('checked', false);
                $('#showMega2').prop('checked', false);
                $('#showMega3').prop('checked', false);
                $('#showMega4').prop('checked', false);
                $('#showMega5').prop('checked', false);
                $(".more-arrow2").removeClass('rotate-arrow');
                $(".more-arrow3").removeClass('rotate-arrow');
                $(".more-arrow4").removeClass('rotate-arrow');
                $(".menu-btn").removeClass('open');
                $(".link-set").addClass('sethide');
                $(".link-set").removeClass('setshow');
                menuOpen = false;
            } 
        }
    });

    $(document).ready(function(){
        $('#showMega1').click(function(){
            $('#showMega2').prop('checked', false);
            $('#showMega3').prop('checked', false);
            $('#showMega4').prop('checked', false);
            $('#showMega5').prop('checked', false);
            $(".more-arrow2").removeClass('rotate-arrow');
            $(".more-arrow3").removeClass('rotate-arrow');
            $(".more-arrow4").removeClass('rotate-arrow');
        });
    });
    $(document).ready(function(){
        $('#showMega2').click(function(){
            $('#showMega1').prop('checked', false);
            $('#showMega3').prop('checked', false);
            $('#showMega4').prop('checked', false);
            $('#showMega5').prop('checked', false);
            $(".more-arrow3").removeClass('rotate-arrow');
            $(".more-arrow4").removeClass('rotate-arrow');
            $(".more-arrow2").addClass('rotate-arrow');
            if(document.querySelector('#showMega2').checked === false){
                $(".more-arrow2").removeClass('rotate-arrow');
            }
        });
    });
    $(document).ready(function(){
        $('#showMega3').click(function(){
            $('#showMega1').prop('checked', false);
            $('#showMega2').prop('checked', false);
            $('#showMega4').prop('checked', false);
            $('#showMega5').prop('checked', false);
            $(".more-arrow2").removeClass('rotate-arrow');
            $(".more-arrow4").removeClass('rotate-arrow');
            $(".more-arrow3").addClass('rotate-arrow');
            if(document.querySelector('#showMega3').checked === false){
                $(".more-arrow3").removeClass('rotate-arrow');
            }
        });
    });
    $(document).ready(function(){
        $('#showMega4').click(function(){
            $('#showMega1').prop('checked', false);
            $('#showMega2').prop('checked', false);
            $('#showMega3').prop('checked', false);
            $('#showMega5').prop('checked', false);
            $(".more-arrow2").removeClass('rotate-arrow');
            $(".more-arrow3").removeClass('rotate-arrow');
            $(".more-arrow4").addClass('rotate-arrow');
            if(document.querySelector('#showMega4').checked === false){
                $(".more-arrow4").removeClass('rotate-arrow');
            }
        });
    });
    $(document).ready(function(){
        $('#showMega5').click(function(){
            $('#showMega1').prop('checked', false);
            $('#showMega2').prop('checked', false);
            $('#showMega3').prop('checked', false);
            $('#showMega4').prop('checked', false);
            $(".more-arrow2").removeClass('rotate-arrow');
            $(".more-arrow3").removeClass('rotate-arrow');
            $(".more-arrow4").removeClass('rotate-arrow');
        });
    });

    //$('#showMega22').prop('checked', true);

    // const [sidestate, setSidestate] = useState();
    // const [findsidestate, setfindSidestate] = useState(false);
    // const showsidenav = () => {
    //     var sidenav = document.getElementById("ham");
    //     if (!findsidestate) {
    //         setSidestate(sidenav.style.display = "flex");
    //         setfindSidestate(true);
    //     } else {
    //         setSidestate(sidenav.style.display = "none");
    //         setfindSidestate(false);
    //     }
    // }

    return (
        <div className='navbar-container'>
            <div className="link-container" style={{ color: theme ? "white" : "black" }}>
                <ul className='link-list'>
                    <div className="logo-container">
                        <img src={theme ? images.logo : images.light_logo} alt="logo" className='logo' />
                    </div>
                    <div className='link-set sethide'>
                        <img src={images.menu_top} className="menutop" alt='menutop'/>
                        <li className="nav-link first" >
                            <input type="checkbox" id="showMega1"/>
                            <a href="#hwa"><label for="showMega1"><h2>About</h2></label></a>
                        </li>
                        <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                        <li className="nav-link" >
                            <input type="checkbox" id="showMega2"/>
                            <a href="#services"><label for="showMega2"><h2>Services</h2><div className='more-arrow more-arrow2' style={{ borderTopColor: theme ? "white" : "black", borderRightColor: theme ? "white" : "black" }}></div></label></a>
                            <div className="mega-box mega2">
                                <div className="content">
                                    <div className='mega-arrow' style={{ background: theme ? "#1d1d1d" : "white" }}></div>
                                    <div className='table table2'>
                                        <div className='rowspan2 updownmagin'>
                                            <div className='row'>
                                                <div className="tcol limit_width_fir">
                                                    <header><span><img src={images.devops_menu} alt=""/></span><span className='headertxt'>DevOps</span></header>
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width_mid">
                                                    <header><span><img src={images.web_menu} alt=""/></span><span className='headertxt'>Web Development</span></header>    
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width_lst">
                                                    <header><span><img src={images.blockchain_menu} alt=""/></span><span className='headertxt'>Blockchain</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            </div>
                                            <div className='row'>
                                                <div class="tcol limit_width_fir">
                                                    <header><span><img src={images.uiux_menu} alt=""/></span><span className='headertxt'>UI/UX Design</span></header>
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width_mid">
                                                    <header><span><img src={images.app_menu} alt=""/></span><span className='headertxt'>App Development</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width_lst">
                                                    <header><span><img src={images.seo_menu} alt=""/></span><span className='headertxt'>SEO</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            </div>
                                            <div className='row'>
                                                <div class="tcol limit_width_fir">
                                                    <header><span><img src={images.ecommarce_menu} alt=""/></span><span className='headertxt'>E-commerce</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width_mid">
                                                    <header><span><img src={images.pwa_menu} alt=""/></span><span className='headertxt'>PWA Development</span></header>                                                  
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            </div>
                                        </div>
                                        <div className='rowspan2 theme_img'>
                                            <div class="tcol">
                                                <img src={service} alt="" className='menu_theme menu_theme_extra'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                        <li className="nav-link">
                            <input type="checkbox" id="showMega3"/>
                            <a href="#technology"><label for="showMega3"><h2>Tehnologies</h2><div className='more-arrow more-arrow3' style={{ borderTopColor: theme ? "white" : "black", borderRightColor: theme ? "white" : "black" }}></div></label></a>
                            <div className="mega-box mega3">
                                <div className="content">
                                    <div className='mega-arrow' style={{ background: theme ? "#1d1d1d" : "white" }}></div>
                                    <div className='table table3'>
                                        <div className='row'>
                                            <div className="tcol limit_width_t">
                                                <header><span><img src={images.devops_menu} alt=""/></span><span className='headertxt'>DevOps</span></header>
                                                <ul class="mega-links" style={{ color: theme ? "white" : "black" }}>
                                                    <li><a href="/link">AWS</a></li>
                                                    <li><a href="/link">Google Cloud</a></li>
                                                    <li><a href="/link">Jenkins</a></li>
                                                    <li><a href="/link">Kubernetes</a></li>
                                                    <li><a href="/link">Docker</a></li>
                                                </ul>
                                            </div>
                                            <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            <div class="tcol limit_width_t">
                                                <header><span><img src={images.design_menu} alt=""/></span><span className='headertxt'>Design</span></header>
                                                <ul class="mega-links" style={{ color: theme ? "white" : "black" }}>
                                                    <li><a href="/link">Photoshop</a></li>
                                                    <li><a href="/link">Illustrator</a></li>
                                                    <li><a href="/link">Adobe XD</a></li>
                                                    <li><a href="/link">Figma</a></li>
                                                    <li><a href="/link">Blender</a></li>
                                                </ul>
                                            </div>
                                            <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            <div class="tcol limit_width_t">
                                                <header><span><img src={images.frontend_menu} alt=""/></span><span className='headertxt'>Front End</span></header>
                                                <ul class="mega-links" style={{ color: theme ? "white" : "black" }}>
                                                    <li><a href="/link">React</a></li>
                                                    <li><a href="/link">Angular</a></li>
                                                    <li><a href="/link">TypeScript</a></li>
                                                    <li><a href="/link">Vue.js</a></li>
                                                    <li><a href="/link">HTML5</a></li>
                                                </ul>
                                            </div>
                                            <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            <div class="tcol limit_width_t">
                                                <header><span><img src={images.backend_menu} alt=""/></span><span className='headertxt'>Back End</span></header>
                                                <ul class="mega-links" style={{ color: theme ? "white" : "black" }}>
                                                    <li><a href="/link">PHP</a></li>
                                                    <li><a href="/link">Python</a></li>
                                                    <li><a href="/link">Java</a></li>
                                                    <li><a href="/link">Node.js</a></li>
                                                    <li><a href="/link">.Net</a></li>
                                                </ul>
                                            </div>
                                            <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                        </div>
                                        <div className='row'>
                                            <div class="tcol limit_width_t">
                                                <header><span><img src={images.mobile_menu} alt=""/></span><span className='headertxt'>Mobile</span></header>
                                                <ul class="mega-links" style={{ color: theme ? "white" : "black" }}>
                                                    <li><a href="/link">iOS</a></li>
                                                    <li><a href="/link">Swift</a></li>
                                                    <li><a href="/link">Android</a></li>
                                                    <li><a href="/link">Kotlin</a></li>
                                                    <li><a href="/link">React Native</a></li>
                                                    <li><a href="/link">Flutter</a></li>
                                                </ul>
                                            </div>
                                            <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            <div class="tcol limit_width_t">
                                                <header><span><img src={images.cms_menu} alt=""/></span><span className='headertxt'>CMS</span></header>
                                                <ul class="mega-links" style={{ color: theme ? "white" : "black" }}>
                                                    <li><a href="/link">Wordpress</a></li>
                                                    <li><a href="/link">Shopify</a></li>
                                                    <li><a href="/link">Magento</a></li>
                                                </ul>
                                            </div>
                                            <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            <div class="tcol colspan2">
                                                <img src={images.theme_technology} alt="" className='menu_theme'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                        <li className="nav-link">
                            <input type="checkbox" id="showMega4"/>
                            <a href="#industries"><label for="showMega4"><h2>Industries</h2><div className='more-arrow more-arrow4' style={{ borderTopColor: theme ? "white" : "black", borderRightColor: theme ? "white" : "black" }}></div></label></a>
                            <div className="mega-box mega4">
                                <div className="content">
                                    <div className='mega-arrow' style={{ background: theme ? "#1d1d1d" : "white" }}></div>
                                    <div className='table table4'>
                                        <div className='rowspan2 updownmagin'>
                                            <div className='row'>
                                                <div className="tcol limit_width">
                                                    <header><span><img src={images.media_menu} alt=""/></span><span className='headertxt'>Media</span></header>
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.real_estate_menu} alt=""/></span><span className='headertxt'>Real Estate</span></header>    
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.travel_menu} alt=""/></span><span className='headertxt'>Travel</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            </div>
                                            <div className='row'>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.education_menu} alt=""/></span><span className='headertxt'>Education</span></header>
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.healthcare_menu} alt=""/></span><span className='headertxt'>Healthcare</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.logistics_menu} alt=""/></span><span className='headertxt'>Logistics</span></header>                                                   
                                                </div> 
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            </div>
                                            <div className='row'>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.e_commarce_menu} alt=""/></span><span className='headertxt'>E-commerce</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.restaurant_menu} alt=""/></span><span className='headertxt'>Restaurant</span></header>                                                  
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                                <div class="tcol limit_width">
                                                    <header><span><img src={images.goverment_menu} alt=""/></span><span className='headertxt'>Goverment</span></header>                                                   
                                                </div>
                                                <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                                            </div>
                                        </div>
                                        <div className='rowspan2 theme_img'>
                                            <div class="tcol">
                                                <img src={images.theme_industry} alt="" className='menu_theme menu_theme_extra'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                        <li className="nav-link">
                            <input type="checkbox" id="showMega5"/>
                            <a href="#our works"><label for="showMega5"><h2>Projects</h2></label></a>
                        </li>
                        <div className='nav-bottom-border' style={{ backgroundImage: theme ? "linear-gradient(to right,rgb(44, 44, 44), rgb(202, 202, 202), rgb(44, 44, 44))" : "linear-gradient(to right,rgb(200, 200, 200), rgb(235, 234, 234), rgb(200, 200, 200))" }}></div>
                        <a href='#contactus'>{!theme?<li className="nav-link lt_btn"><div className='get-touch-button'><h3>Let's Talk</h3></div></li>:<li className="nav-link lt_btn"><div className='get-touch-button-dark'><h3>Let's Talk</h3></div></li>}</a>
                        <li className="nav-link"><div className='change-theme-icon-container' onClick={() => { changeTheme(!theme) }}><img className='change-theme-icon' src={!theme ? images.change_theme_logo : images.light_theme} alt='change-theme' /></div></li>
                    </div>                      
                    <div class="menu-btn">
                        <div class="menu-btn__burger" style={{ backgroundColor: theme ? "white" : "black" }}></div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar