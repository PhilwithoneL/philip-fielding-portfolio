import React from 'react';
import Img1 from '../img/reviewme.jpg';

const Projects = () => {

    return (
        <div>
            <div className = "project-section">
                <h2 className = "project-header">Projects</h2>
                <div className = "row">
                    
                    <div className = "col m6 s12">

                        <div className = "project-box-left" >
                            <div className = "project-img-container">
                                <img className = "project-img" src = {Img1} style={{ filter: "grayscale(100%)" }}></img>

                                <div className = "project-links center-div">
                                    <div className ="btn project-link-btn black-text waves-effect waves-light btn">Github</div>
                                    <div className ="btn project-link-btn black-text waves-effect waves-light btn">Site</div>
                                </div>
            
                            </div>
                            <div className = "project-info">
                                <h5><b>Review.me</b></h5>
                                <p>A web page using The Movie Database Api, getting the trending movies and most up to date movie trailers.</p>
                                <div className = "tech-div center-div">
                                    <p className = "tech-div-text">Javascript</p>
                                    <p className = "tech-div-text">Scss</p>
                                    <p className = "tech-div-text">Html</p>
                                    <p className = "tech-div-text">Bootstrap</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className = "col m6 s12 center-div">

                    <div className = "project-box-right" >
                            <div className = "project-img-container">
                                <img className = "project-img" src = {Img1} style={{ filter: "grayscale(100%)" }}></img>

                                <div className = "project-links center-div">
                                    <div className ="btn project-link-btn black-text waves-effect waves-light btn">Github</div>
                                    <div className ="btn project-link-btn black-text waves-effect waves-light btn">Site</div>
                                </div>
            
                            </div>
                            <div className = "project-info">
                                <h5><b>Review.me</b></h5>
                                <p>A web page using The Movie Database Api, getting the trending movies and most up to date movie trailers.</p>
                                <div className = "tech-div center-div">
                                    <p className = "tech-div-text">Javascript</p>
                                    <p className = "tech-div-text">Scss</p>
                                    <p className = "tech-div-text">Html</p>
                                    <p className = "tech-div-text">Bootstrap</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
