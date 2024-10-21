import React from 'react'
import './Services.css'
import services from '../../constants/services_data'
import ServiceCard from './ServiceCard'
import ServiceCardSmallScreen from './ServiceCardSmallScreen';

function Services({ theme }) {
    // const [increase, setincrease] = useState(1);
    // const firstRow = [services[0], services[1], services[2]];
    // const secondRow = [services[3], services[4], services[5]];

    // useEffect(() => {
    //     console.log(increase);
    //     var doc = window.screen.width;
    //     console.log(doc);
    //     if (doc >= 950) {
    //         var card = document.querySelector(".slick-list");

    //     }
    //     else {
    //         var card = document.querySelector(".services-body-container-small-screen");
    //     }

    //     var width = card.offsetWidth;
    //     console.log(width);

    //     var total = width / 270;
    //     console.log(total);
    //     if (doc >= 950) {
    //         console.log(total);
    //         setincrease(total - 0.75);
    //     } else if (doc >= 450) {
    //         console.log(total);
    //         setincrease(total - 0.5);
    //     } else {
    //         console.log(total);
    //         setincrease(1);

    //     }



    // }, []);

    // const getcardwidth = () => {
    //     // var card = document.querySelector(".service-card");
    //     // var width = card.offsetWidth;
    //     // console.log(width);
    //     setincrease(increase + 0.5);
    //     console.log(increase)
    // }



    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 800,
    //     slidesToShow: increase,
    //     slidesToScroll: 1,
    //     // variableWidth:true,
    //     centerMode: true,

    // };
    // var settings_sm = {
    //     dots: true,
    //     infinite: true,
    //     speed: 800,
    //     slidesToShow: increase,
    //     slidesToScroll: 1,
    //     // variableWidth:true,
    //     // centerMode:true,

    // };

    return (
        <div id="services" className='services-body' style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>
            <div className='services-title-container'>
                <h1 className='services-title'>Our Services</h1>
            </div>
            <div className='services-body-container-large-screen'>
                <div className="lg-grid">
                    <ServiceCard service={services[0]} />
                    <ServiceCard service={services[1]} />
                    <ServiceCard service={services[2]} />
                    <ServiceCard service={services[3]} />
                    <ServiceCard service={services[4]} />
                    <ServiceCard service={services[5]} />
                </div>
                <div className="sm-grid">
                    <ServiceCardSmallScreen service={services[0]} />
                    <ServiceCardSmallScreen service={services[1]} />
                    <ServiceCardSmallScreen service={services[2]} />
                    <ServiceCardSmallScreen service={services[3]} />
                    <ServiceCardSmallScreen service={services[4]} />
                    <ServiceCardSmallScreen service={services[5]} />
                </div>




                {/* <Slider {...settings}>
                    <ServiceCard service={services[0]} />
                    <ServiceCard service={services[1]} />
                    <ServiceCard service={services[2]} /> */}

                {/* <div className='a'>
                   <ServiceCard service={services[3]} />
                   <ServiceCard service={services[4]} />
                   <ServiceCard service={services[5]} />
               </div> */}
                {/* <ServiceCard service={services[3]} />
                    <ServiceCard service={services[4]} />
                    <ServiceCard service={services[5]} /> */}

                {/* <div className='a'>
                   <ServiceCard service={services[3]} />
                   <ServiceCard service={services[4]} />
                   <ServiceCard service={services[5]} />
               </div> */}
                {/* </Slider> */}
            </div>
            {/* <div className='services-body-container-small-screen'>
                <Slider {...settings_sm}>
                    <ServiceCardSmallScreen service={services[0]} />
                    <ServiceCardSmallScreen service={services[1]} />
                    <ServiceCardSmallScreen service={services[2]} />
                    <ServiceCardSmallScreen service={services[3]} />
                    <ServiceCardSmallScreen service={services[4]} />
                    <ServiceCardSmallScreen service={services[5]} />
                </Slider>
            </div> */}
        </div>
    )
}

export default Services