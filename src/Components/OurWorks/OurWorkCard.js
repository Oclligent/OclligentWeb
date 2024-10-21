import React from 'react'
import "./OurWorkCard.css"
import { Link } from "react-router-dom";

function OurWorkCard({work}) {
    return (
        <div id="card">
            <div id="img-div">
                <Link to={work.link_main} target="_self">
                    <img src={work.main_image} alt="img" srcset="" id="img"/>
                </Link>
            </div>
            <div id="description">
                <div className="our-works-detail-container">
                    <div className="our-works-title-container">
                        <img src={work.title_image} alt="title"/>
                        <h1>{work.title}</h1>
                    </div>
                    <div className="our-works-other-details-container">
                        <h3>{work.sub_title}</h3>
                        <div className='our-works-tag-container'>
                        {
                            work.tags.map((tag_part,index)=>{
                                return <a key={index} href={tag_part.tag_link}><h6 key={index}>{tag_part.tag_name}</h6></a>
                            })
                        }
                        </div>
                        <h4>{work.description}<a href={work.learn_more_link}><div className='learn_arrow'></div></a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWorkCard