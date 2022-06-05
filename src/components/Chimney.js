import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { useState } from 'react/cjs/react.production.min';


const Chimney = (colorMode) => {

    let chimneyColor;
    let chimneySide1Color;
    let chimneySide2Color;
    let chimneySide3Color;
    let bubbleColor;

    const colorModeSelected =  colorMode.colorMode;

    if(colorModeSelected === "light") {

        chimneyColor = { 
            
            background: "#c2dcff"

        }

        chimneySide1Color = {

            background: "#1D4049",
            
        }

        chimneySide2Color = {

            background: "#3A8092",
        }

        chimneySide3Color = {

            background: "#11262C",


        }

        bubbleColor = {
            background: "#11262C",
        }


    } 


    return (
        <div className = "chimney-container center-chimney" style = {chimneyColor}>

                <div className ="chimney-position" id= "chimney" >
                    
                    <div className = "smoke">

                        <div className = "bubble bubble-1" style = {bubbleColor}><FaHtml5 className = "tech-icon tech-icon-html" /></div>
                        <div className = "bubble bubble-2" style = {bubbleColor}><FaCss3Alt className = "tech-icon tech-icon-css"/></div>
                        <div className = "bubble bubble-3" style = {bubbleColor}><DiJavascript className = "tech-icon tech-icon-js"/></div>
                        <div className = "bubble bubble-4" style = {bubbleColor}><FaReact className = "tech-icon tech-icon-react"/></div>
                        <div className = "bubble bubble-5" style = {bubbleColor}><DiMaterializecss className = "tech-icon tech-icon-material"/></div>
                        <div className = "bubble bubble-6" style = {bubbleColor}><SiTailwindcss className = "tech-icon tech-icon-tailwind"/></div>

                        
                        <div className = "extra-bubble extra-bubble-1"></div>
                        <div className = "extra-bubble extra-bubble-2"></div>
                        <div className = "extra-bubble extra-bubble-3"></div>
                        <div className = "extra-bubble extra-bubble-4"></div>
                        <div className = "extra-bubble extra-bubble-5"></div>
                        <div className = "extra-bubble extra-bubble-6"></div>

                    </div>

                    <div className = "chimney">
                        <div className = "side-1" style = {chimneySide1Color}></div>
                        <div className = "side-2" style = {chimneySide3Color}></div>
                        <div className = "side-3" style = {chimneySide2Color}></div>
                    </div>



                </div>

                <div className = "building-edge">
                    <div className = "edge-front" style = {chimneySide1Color}></div>
                    <div className = "edge-below" style = {chimneySide3Color}></div>
                </div>

            </div>
    )

}

export default Chimney
