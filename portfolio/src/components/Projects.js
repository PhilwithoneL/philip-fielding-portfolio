import React from 'react';
import Img1 from '../img/reviewme.jpg';

const Projects = () => {

    return (
        <div>
            <div className = "project-section">
                <h2 className = "project-header">Some projects I've done</h2>
                <div className = "row">
                    
                    <div className = "col m6 s12">
                    <div className = "project-box">
                        <div className = "project-img-container">
                            <img className = "project-img" src = {Img1} style={{ filter: "grayscale(100%)" }}></img>
                            <div className = "project-name-container">
                                <div className = "project-name">
                                    <div className ="project-name-text center-div">Reviewme</div>
                                </div>
                            </div>
                        </div>
                        <div className = "project-info">
                            <h5><b>Review.me</b></h5>
                        </div>
                    </div>

                    </div>
                    <div className = "col m6 s12"></div>
                </div>

            </div>
        </div>
    )
}

export default Projects
