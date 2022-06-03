import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs'
import { FaNode } from 'react-icons/fa'


const Tech = ({domWidthLeft, domWidthRight, colorMode}) => {

    let techRow;

    

    if (colorMode === "light") {
        
        techRow = "tech-light row"

    } else if (colorMode === "dark") {

        techRow = "tech row"

    }

    return (
        <div className = {techRow} >

            <div className = "tech-container" >

            <h1 className = "about-header" data-aos = {domWidthLeft}>Tech</h1>


            <div className ="row tech-row" >
                <div className = "col xl2 l4 m4 s6 center-div tech-box tech-animation" style = {{animationDelay: "0.2s"}}>
                    <div className ="tech-box-size ">
                        <FaHtml5 className ="tech-icon-html"/> 
                    </div>
                    
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box tech-animation" style = {{animationDelay: "0.4s"}}>
                    <div className ="tech-box-size">
                        <FaCss3Alt className ="tech-icon-css "/> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box tech-animation" style = {{animationDelay: "0.6s"}}>
                    <div className ="tech-box-size">
                        <DiJavascript className ="tech-icon-js"/> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box tech-animation" style = {{animationDelay: "0.8s"}}>
                    <div className ="tech-box-size">
                        <FaReact className ="tech-icon-react "/> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box tech-animation" style = {{animationDelay: "1s"}}>
                    <div className ="tech-box-size">
                        <DiMaterializecss className ="tech-icon-material "/> 
                    </div>
                </div>
                <div className = "col xl2 l4 m4 s6 center-div tech-box tech-animation" style = {{animationDelay: "1.2s"}}>
                    <div className ="tech-box-size">
                        <SiTailwindcss className ="tech-icon-tailwind "/> 
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Tech