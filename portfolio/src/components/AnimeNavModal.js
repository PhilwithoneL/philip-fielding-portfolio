import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { SiAboutDotMe } from 'react-icons/si';
import { IoIosContact } from 'react-icons/io';
import { GiPaintBrush } from 'react-icons/gi'

const AnimeNavModal = ({closeLinks}) => {

    return (
        <div>
                <div className = "background-modal" onClick={closeLinks}></div>

                <div className = "buttons">

                    {/* <div className = "home-link-1 z-depth-1">
                        <div className = "center-div">
                            <AiFillHome className = "nav-logo"/>
                        </div>
                    </div> */}

                    <div className = "about-link-2 z-depth-1">
                        <div className = "center-div">
                            <SiAboutDotMe className = "nav-logo"/>
                        </div>
                    </div>

                    <div className = "projects-link-3 z-depth-1">
                        <div className = "center-div">
                            <GiPaintBrush className = "nav-logo"/>
                        </div>
                    </div>

                    <div className = "contact-link-4 z-depth-1">
                        <div className = "center-div">
                            <IoIosContact className = "nav-logo"/>
                        </div>
                    </div>
                
                </div>
        </div>
    )
}

export default AnimeNavModal
