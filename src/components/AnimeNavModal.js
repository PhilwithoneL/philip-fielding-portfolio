import React from 'react'

const AnimeNavModal = ({ closeLinks, findAbout, findProject, findContact, findTech}) => {

    return (
        <div >
                <div className = "background-modal" ></div>

                <div className = "anime-nav-btn-container center-div" onClick={closeLinks}>

                    <div className = "buttons">

                        <div className = "about-link-2 z-depth-1">
                            <div className = "anime-links-inline center-div">
                                
                                <div onClick = { findAbout } >About</div>
                            </div>
                        </div>

                        <div className = "contact-link-4 z-depth-1">
                            <div className = "anime-links-inline center-div">
                            
                                <div onClick = { findTech }>Tech</div>
                            </div>
                        </div>

                        <div className = "projects-link-3 z-depth-1">
                            <div className = "anime-links-inline center-div">
                        
                                <div onClick = { findProject } >Projects</div>
                            </div>
                        </div>
               
                        <div className = "contact-link-4 z-depth-1">
                            <div className = "anime-links-inline center-div">
                            
                                <div onClick = { findContact }>Contact</div>
                            </div>
                        </div>
                    
                    </div>

                </div>

        </div>
    )
}

export default AnimeNavModal