import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AnimeNavModal from './AnimeNavModal';
import { AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';


const AnimeNav = ( { findAbout, findProject, findContact } ) => {

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
        <div>
            <div className = "nav-container">
                    
                <div className = "open-icon-container">
                            
                    <div className ="scroll-nav">
                        <AiOutlineArrowUp className = "open-nav-up-1" />
                            <div className ="scroll-text" onClick ={openLinks}>Scroll or Click me</div>
                            <AiOutlineArrowDown className = "open-nav-down-2" />


                            {visible ? <AnimeNavModal closeLinks = {openLinks} findAbout = {findAbout} findProject = {findProject} findContact = {findContact} /> : false}
                            
                    </div>


                            
                </div>

                        
                        
            </div>

        </div>
    )
}

export default AnimeNav
