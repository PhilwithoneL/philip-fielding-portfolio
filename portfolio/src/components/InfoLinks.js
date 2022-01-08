import React from 'react'
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si'

const InfoLinks = () => {
    return (
        <div className = "info-links">
            
            <div>

                <div className ="col m3 s2"></div>

                <div className = "col m6 s8 row center-div">

                    <div className = "col center-div"><VscGithub className = "git-icon" /></div>
                    <div className = "col center-div "><div className ="cv"><b>Get CV</b></div></div>
                    <div className = "col center-div"><SiLinkedin className ="linked-icon" /></div>

                </div>

                <div className ="col m3 s2 "></div>

            </div>

        </div>
    )
}

export default InfoLinks
