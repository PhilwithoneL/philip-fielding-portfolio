import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs'
import { FaNode } from 'react-icons/fa'


const Tech = ({domWidthLeft, domWidthRight}) => {
    return (
        <div>

            <h1 className = "about-header" data-aos = {domWidthLeft}>Technology</h1>

             <h5 data-aos={domWidthLeft} className = "about-text">The tech I've worked with includes:</h5>

            <div className ="row tech-row">
                <div className = "col xl2 l4 m4 s6 center-div tech-box">
                    <div className ="tech-box-size">
                        <FaHtml5 /> 
                    </div>
                    
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box">
                    <div className ="tech-box-size">
                        <FaCss3Alt /> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box">
                    <div className ="tech-box-size">
                        <DiJavascript /> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box">
                    <div className ="tech-box-size">
                        <FaReact /> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box">
                    <div className ="tech-box-size">
                        <DiMaterializecss /> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box">
                    <div className ="tech-box-size">
                        <SiTailwindcss /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech