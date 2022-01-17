import React, { useEffect, useState, useRef } from 'react';


const About = ({domWidthLeft, domWidthRight}) => {

    return (
        <div>
        
            <div className ="about" >
                        
                <h1 className = "about-header" data-aos = {domWidthLeft}>Who am I?</h1>
                    <div>
                        <div className ="about-text" data-aos={domWidthRight}>I'm a web developer from the northern powerhouse, <div className = "about-important" >Manchester</div>.</div>
                        <div className ="about-text" data-aos={domWidthLeft}>During <b className = "lockdown">lockdown</b> and a few months of furlough I discovered a passion for front-end development. </div>
                        <br></br>
                        <div className = "about-text" data-aos={domWidthRight}>
                            I'm currently working on personal front-end projects to further my experience with goal to become a full stack developer in the future.

                        </div>
                    
                    </div>
                    <div>

                       
                               
                    </div>

            </div>

            <div className = "divider section-divider"></div>
            

        </div>
    )
}

export default About
