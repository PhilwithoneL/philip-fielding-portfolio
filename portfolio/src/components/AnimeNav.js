import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AnimeNavModal from './AnimeNavModal';
import { AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';
import  { AiOutlineBars } from 'react-icons/ai';

const AnimeNav = ( { findAbout, findProject, findContact, findTech } ) => {

    const [visible, setVisible] = useState(false);

    const openLinks = () => {

        if(visible === false) {
            console.log("true")
            setVisible(true);
        } else {
            console.log("false")
            setVisible(false);
        }

    }


    return (
        <div className = "nav-container">                 
            <div className = "open-icon-container">
                <div className ="scroll-nav">

                    <div className ="scroll-text" onClick ={openLinks}><AiOutlineBars className = "anime-nav"/></div>

                    {visible ? <AnimeNavModal closeLinks = {openLinks} findAbout = {findAbout} findProject = {findProject} findContact = {findContact} findTech={findTech}/> : false}
                            
                </div>
            </div>
        </div>

    )
}

export default AnimeNav
