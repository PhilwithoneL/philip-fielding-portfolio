import React from 'react'
import { VscGithub } from 'react-icons/vsc';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { CgNotes } from 'react-icons/cg';
import CV from '../docs/cv.pdf';
import M from 'materialize-css/dist/js/materialize.js'


const InfoLinks = () => {


    M.AutoInit();

    return (
        <div className = "info-links">
            
            <div>

                <div className ="col m3 s2"></div>

                <div className = "col m6 s8 row center-div">

                    <a className = "col center-div git-icon" href='https://github.com/PhilwithoneL'><VscGithub /></a>
                    <a className = "col center-div cv" href = {CV} target="_blank" data-position="top" data-tooltip="Download my CV!">
                        <CgNotes />
                        
                    </a>
                    <a className = "col center-div linked-icon" href="https://www.linkedin.com/in/philip-fielding-39b39120a/"><RiLinkedinBoxLine /></a>

                </div>

                <div className ="col m3 s2 "></div>

            </div>

        </div>
    )
}

export default InfoLinks
