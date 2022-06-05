import React, {useState} from 'react'
import AnimeNavModal from './AnimeNavModal';
import  { FiMenu } from 'react-icons/fi';
import  { AiOutlineClose } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';


const AnimeNav = ( { findAbout, findProject, findContact, findTech, colorMode, colorModeSelect } ) => {

    let animeOpenStyle;
    let animeCloseStyle;

    if(colorMode === "light") {
        
        animeOpenStyle = "anime-menu-light"
        animeCloseStyle = "anime-close-light"

    } else if (colorMode === "dark") {

        animeOpenStyle = "anime-menu"
        animeCloseStyle = "anime-close"

    }

    let linkColor;
    let navStyle;

    const colorModeBtnStyle = {
        fontSize: "40px",
        position: "relative",
        top:"20px",
        zIndex: "100",
        color: "rgb(174, 212, 255);",
        cursor: "pointer"

    }

    if(colorMode === "light") {
        linkColor = {
            color:"#3A8092"
        }

        navStyle = {
            backdropFilter: "blur(10px)",
            background:"rgb(194, 220, 255, 50%)"
        }

    } else if (colorMode === "dark") {
        linkColor = {
            color:"rgb(174, 212, 255)"
        }

        navStyle = {
            backdropFilter: "blur(10px)",
            background:"rgb(33, 49, 56, 0.1)"
        }
    }


    const [visible, setVisible] = useState(false);

    const openCloseDiv = document.getElementById('openClose');

    const openLinks = () => {

        if(visible === false) {
            openCloseDiv.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class= ${animeCloseStyle}  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`

            setVisible(true);
            
        } else {
            openCloseDiv.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=${animeOpenStyle} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`

            setVisible(false);
        }

    }

    return (
        <div className = "nav-container anime-nav">

            

            <div className = "open-icon-container">
                <div className ="scroll-nav">

                    <div className ="scroll-text" onClick ={openLinks} id = "openClose"><FiMenu className = {animeOpenStyle} /></div>

                    {visible ? <AnimeNavModal closeLinks = {openLinks} findAbout = {findAbout} findProject = {findProject} findContact = {findContact} findTech={findTech} colorMode = { colorMode }/> : false}
                            
                </div>
            </div>

            <div className= "colorModeBtnDiv "><div style = {colorModeBtnStyle} className = "link-text link center-div"><CgDarkMode onClick = {colorModeSelect} style = {linkColor}/></div></div>

        
        </div>

    )
}

export default AnimeNav
