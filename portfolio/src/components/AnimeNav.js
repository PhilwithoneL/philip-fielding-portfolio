import React, {useState} from 'react'
import ReactDOMServer from 'react-dom/server';
import { CgScrollV } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoIosContact } from 'react-icons/io';
import { GiPaintBrush } from 'react-icons/gi'

const AnimeNav = () => {

    const buttonCount = [0];

    const openLinks = () => {

        if(buttonCount[0] === 0) {

            const navOpen = document.getElementById('navOpen');

            const homeIcon = ReactDOMServer.renderToString(<AiFillHome className = "project-nav-logo"/>);
            const projectIcon = ReactDOMServer.renderToString(<GiPaintBrush className = "project-nav-logo"/>);
            const aboutIcon = ReactDOMServer.renderToString(<IoIosContact className = "project-nav-logo"/>);
        
            navOpen.innerHTML += 
            
            `<div class = "link-1 z-depth-1">
                <div class = "open-icon-container center-div">
                    ${homeIcon}
                </div>

            </div>
            
            <div class = "link-2 z-depth-1">
                <div class = "open-icon-container center-div">
                    ${projectIcon}
                </div>

            </div>

            <div class = "link-3 z-depth-1">
                <div class = "open-icon-container center-div">
                    ${aboutIcon}
                </div>

            </div>
            
            `

            buttonCount[0] = 1;

            console.log(buttonCount);

        } else if (buttonCount[0] === 1) {

            const navOpen = document.getElementById('navOpen');
        
            navOpen.innerHTML = ``


            buttonCount[0] = 0;

            console.log(buttonCount);

        }

    }

    return (
        <div>
            <div className = "nav-container" id = "navContainer">

                <div className = "nav-links" >

                    <div className = "nav-open z-depth-1" id = "nav-open">
                    

                        <div className = "open-icon-container center-div" onClick = {openLinks}>
                            <CgScrollV className = "open-nav-logo" />
                            
                        </div>

                        <div id="navOpen" className ="center-div"></div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnimeNav
