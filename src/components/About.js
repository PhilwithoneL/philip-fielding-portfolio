import React, { useEffect, useState, useRef } from 'react';


const About = ({domWidthLeft, domWidthRight, findProject,colorMode}) => {

    let btnStyle;

    if(colorMode === "light") {

        // btnStyle = "submit-btn center-div submit-btn-light-mode"

        btnStyle = "submit-btn-light-mode submit-btn center-div"

    } else if (colorMode === "dark") {

        btnStyle = "submit-btn center-div"
    }



    return (
        <div>
        
            <div className ="about" >

                <div className = "about-container">
                        
                <h1 className = "about-header" data-aos = {domWidthLeft}>Who am I?</h1>
                    <div>
                        <div className ="about-text" data-aos={domWidthRight}>I'm a web developer from the northern powerhouse, <div className = "about-important" >Manchester</div>.</div>
                        <br></br>
                        <div className ="about-text" data-aos={domWidthLeft}>During <b className = "lockdown">lockdown</b> and a few months of furlough I discovered a passion for front-end development. </div>
                        <br></br>
                        <div className = "about-text" data-aos={domWidthRight}>
                            I'm currently working on personal front-end projects to further my experience with goal to become a full stack developer in the future.
                            <br></br>
                            <br></br>
                            Click the button below to see some of my projects.
                        </div>
                        
                        <div className = "row project-btn-container" >
                            
                            <div className ="center-div"> <div className = {btnStyle} onClick = {findProject}>Projects</div></div>
                        
                        </div>

                    
                    </div>
                    <div>

                       
                               
                    </div>

                </div>

            </div>

            <div className = "divider section-divider"></div>
            

        </div>
    )
}

export default About
