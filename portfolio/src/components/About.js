import React, { useEffect, useState, useRef } from 'react';
import Me from '../img/Me.jpg';


const About = ({domWidthLeft, domWidthRight}) => {

    return (
        <div>
        
            <div className ="about" >
                        
                <h1 className = "about-header" data-aos = {domWidthLeft}>Who am I?</h1>
                    <div>
                        <div className ="about-text" data-aos={domWidthRight}>I'm a web developer from the northern powerhouse, <div className = "about-important" >Manchester</div>.</div>
                        <div className ="about-text" data-aos={domWidthLeft}>During <b className = "lockdown">lockdown</b> and a few months of furlough I discovered a passion in frontend development. </div>
                    </div>
                    <div>
                        <br></br>
                        <h5 data-aos={domWidthLeft} >The tech I've worked with include:</h5>
                        <div data-aos={domWidthRight}>               
                            <h className = "about-important-tech tech-icon-html"> HTML</h><h className = "about-important-tech tech-icon-css">CSS</h><h className = "about-important-tech tech-icon-js">Javascript</h><h className = "about-important-tech tech-icon-react">React</h><h className = "about-important-tech tech-icon-material">Materialize</h><h className = "about-important-tech tech-icon-tailwind">Tailwind</h><h className = "about-important-tech  tech-icon-node">Node</h>
                        </div>
                               
                    </div>

            </div>

            <div className = "divider section-divider"></div>
            

        </div>
    )
}

export default About
