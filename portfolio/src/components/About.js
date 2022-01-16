import React, { useEffect, useState, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';


const About = ({domWidthLeft, domWidthRight}) => {

    return (
        <div>
        
            <div className ="about" >
                        
                <h1 className = "about-header" data-aos = {domWidthLeft}>Who am I?</h1>
                    <div>
                        <div className ="about-text" data-aos={domWidthRight}>I'm a web developer from the northern powerhouse, <div className = "about-important" >Manchester</div>.</div>
                        <div className ="about-text" data-aos={domWidthLeft}>During <b className = "lockdown">lockdown</b> and a few months of furlough I discovered a passion for frontend development. </div>
                    </div>
                    <div>
                        <br></br>
                        <h5 data-aos={domWidthLeft} className = "about-text">The tech I've worked with include:</h5>

                        <div className ="row tech-row">
                            <div className = "col l4 m4 s4 center-div tech-box">
                                <div className ="tech-box-size">
                                    <FaHtml5 /> 
                                </div>
                                
                            </div>
                            <div className = "col l4 m4 s4 center-div tech-box">
                                <div className ="tech-box-size">
                                    <FaHtml5 /> 
                                </div>
                            </div>
                            <div className = "col l4 m4 s4 center-div tech-box">
                                <div className ="tech-box-size">
                                    <FaHtml5 /> 
                                </div>
                            </div>
                            <div className = "col l4 m4 s4 center-div tech-box">
                                <div className ="tech-box-size">
                                    <FaHtml5 /> 
                                </div>
                            </div>
                            <div className = "col l4 m4 s4 center-div tech-box">
                                <div className ="tech-box-size">
                                    <FaHtml5 /> 
                                </div>
                            </div>
                            <div className = "col l4 m4 s4 center-div tech-box">
                                <div className ="tech-box-size">
                                    <FaHtml5 /> 
                                </div>
                            </div>
                        </div>
                               
                    </div>

            </div>

            <div className = "divider section-divider"></div>
            

        </div>
    )
}

export default About
