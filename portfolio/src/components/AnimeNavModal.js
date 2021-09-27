import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoIosContact } from 'react-icons/io';
import { GiPaintBrush } from 'react-icons/gi'

const AnimeNavModal = ({closeLinks}) => {

    return (
        <div>
                <div class = "background-modal" onClick={closeLinks}></div>

                <div class = "buttons">

                    <div class = "about-link-1 z-depth-1">
                        <div class = "center-div">
                            <AiFillHome className = "nav-logo"/>
                        </div>
                    </div>

                    <div class = "project-link-2 z-depth-1">
                        <div class = "center-div">
                            <AiFillHome className = "nav-logo"/>
                        </div>
                    </div>

                    <div class = "contact-link-3 z-depth-1">
                        <div class = "center-div">
                            <GiPaintBrush className = "nav-logo"/>
                        </div>
                    </div>

                    <div class = "home-link-4 z-depth-1">
                        <div class = "center-div">
                            <IoIosContact className = "nav-logo"/>
                        </div>
                    </div>
                
                </div>
        </div>
    )
}

export default AnimeNavModal
