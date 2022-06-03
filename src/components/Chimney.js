import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { useState } from 'react/cjs/react.production.min';


const Chimney = (colorMode) => {

    let chimneyColor;

    const colorModeSelected =  colorMode.colorMode;

    if(colorModeSelected === "light") {

        chimneyColor = {
            backgroundColor:"#0ebbffc2"
        }

    } 


    return (
        <div className = "chimney-container center-chimney" style = {chimneyColor}>

                <div className ="chimney-position" id= "chimney" >
                    
                    <div className = "smoke">

                        <div className = "bubble bubble-1"><FaHtml5 className = "tech-icon tech-icon-html" /></div>
                        <div className = "bubble bubble-2"><FaCss3Alt className = "tech-icon tech-icon-css"/></div>
                        <div className = "bubble bubble-3"><DiJavascript className = "tech-icon tech-icon-js"/></div>
                        <div className = "bubble bubble-4"><FaReact className = "tech-icon tech-icon-react"/></div>
                        <div className = "bubble bubble-5"><DiMaterializecss className = "tech-icon tech-icon-material"/></div>
                        <div className = "bubble bubble-6"><SiTailwindcss className = "tech-icon tech-icon-tailwind"/></div>

                        
                        <div className = "extra-bubble extra-bubble-1"></div>
                        <div className = "extra-bubble extra-bubble-2"></div>
                        <div className = "extra-bubble extra-bubble-3"></div>
                        <div className = "extra-bubble extra-bubble-4"></div>
                        <div className = "extra-bubble extra-bubble-5"></div>
                        <div className = "extra-bubble extra-bubble-6"></div>

                    </div>

                    <div className = "chimney">
                        <div className = "side-1"></div>
                        <div className = "side-2"></div>
                        <div className = "side-3"></div>
                    </div>



                </div>

                <div className = "building-edge">
                    <div className = "edge-front"></div>
                    <div className = "edge-below"></div>
                </div>

            </div>
    )

}

export default Chimney
