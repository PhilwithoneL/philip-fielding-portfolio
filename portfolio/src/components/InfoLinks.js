import React from 'react'
import { VscGithub } from 'react-icons/vsc';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { CgNotes } from 'react-icons/cg';

const InfoLinks = () => {
    return (
        <div className = "info-links">
            
            <div>

                <div className ="col m3 s2"></div>

                <div className = "col m6 s8 row center-div">

                    <a className = "col center-div git-icon" href='https://github.com/PhilwithoneL'><VscGithub /></a>
                    <a className = "col center-div cv"><CgNotes /></a>
                    <a className = "col center-div linked-icon"><RiLinkedinBoxLine /></a>

                </div>

                <div className ="col m3 s2 "></div>

            </div>

        </div>
    )
}

export default InfoLinks
