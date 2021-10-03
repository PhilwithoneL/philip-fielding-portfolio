import React from 'react'
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si'

const InfoLinks = () => {
    return (
        <div className = "info-links">
            
            <div className ="row">

                <div className ="col m3"></div>

                <div className = "col m6 row">

                    <div className = "col m4 center-div"><VscGithub className = "git-icon" /></div>
                    <div className = "col m4 center-div "><div className ="cv"><b>Get CV</b></div></div>
                    <div className = "col m4 center-div"><SiLinkedin className ="linked-icon" /></div>

                </div>

                <div className ="col m3"></div>

            </div>

        </div>
    )
}

export default InfoLinks
