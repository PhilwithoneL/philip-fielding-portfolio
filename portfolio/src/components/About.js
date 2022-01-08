import React from 'react';
import Me from '../img/Me.jpg';

const About = ({domWidthLeft, domWidthRight}) => {

    return (
        <div>
            <div className = "dividing-section" ></div>
        
            <div className= "section about-section"  >
        
                    <div className ="about" >
                        <h1 className = "about-header" data-aos = {domWidthLeft}>Who am I?</h1>
                        <div>
                            <h4 data-aos={domWidthRight}>I'm a web developer from the northern powerhouse, <h className = "about-important" >Manchester</h>.</h4>
                            <h5 data-aos={domWidthLeft}>During <b className = "lockdown">lockdown</b> and a few months of furlough I discovered a passion in frontend development. </h5>
                        </div>
                        <div data-aos={domWidthLeft}>
                            <h5>The tech I've worked with include                        
                            <h className = "about-important tech-icon-html"> HTML</h>, <h className = "about-important tech-icon-css">CSS</h>, <h className = "about-important tech-icon-js">Javascript</h>, <h className = "about-important tech-icon-react">React</h>, <h className = "about-important tech-icon-material">Materialize</h>, <h className = "about-important tech-icon-tailwind">Tailwind</h> and <h className = "about-important tech-icon-node">Node</h>.</h5>
                            </div>
                    </div>

            </div>

            <div className = "divider section-divider"></div>

        </div>
    )
}

export default About
