import React from 'react'
import { SiAboutDotMe } from 'react-icons/si';
import { IoIosContact } from 'react-icons/io';
import { GiPaintBrush } from 'react-icons/gi'

const AnimeNavModal = ({closeLinks}) => {

    return (
        <div>
                <div className = "background-modal" ></div>

                <div className = "anime-nav-btn-container center-div" onClick={closeLinks}>

                    <div className = "buttons">


                        <div className = "about-link-2 z-depth-1">
                            <div className = "anime-links-inline center-div">
                                {/* <SiAboutDotMe className = "nav-logo"/> */}
                                <div>About</div>
                            </div>
                        </div>

                        <div className = "projects-link-3 z-depth-1">
                            <div className = "anime-links-inline center-div">
                                {/* <GiPaintBrush className = "nav-logo"/> */}
                                <div>Projects</div>
                            </div>
                        </div>

                        <div className = "contact-link-4 z-depth-1">
                            <div className = "anime-links-inline center-div">
                                {/* <IoIosContact className = "nav-logo"/> */}
                                <div>Contact</div>
                            </div>
                        </div>

                    
                    </div>

                </div>

        </div>
    )
}

export default AnimeNavModal
