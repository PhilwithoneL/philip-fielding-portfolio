import React, { useEffect, useState } from 'react';
import Img1 from '../img/reviewme.jpg';
import Img2 from '../img/AbrosiaKitchens.jpg';
import Img3 from '../img/the-weather-app-img.jpg';
import Img4 from '../img/the-recipe-app-img.jpg';

const Projects = ({domWidthLeft, domWidthRight, findAbout}) => {


    return (
            <div className = "project-section">

                <h2 className = "project-header">Projects</h2>
                <div className = "row projects-row">
                    
                    <div className = "col m6 s12" >

                        <div className = "project-box-left" >

                            <div className = "project-img-container" data-aos = "flip-up">
                                <img className = "project-img" src = {Img1} style={{ filter: "grayscale(100%)" }}></img>

                                <div className = "project-links center-div">
                                    <a href = "https://github.com/PhilwithoneL/review.me" className ="btn project-link-btn waves-effect waves-light center-div">Github</a>
                                    <a href = "https://cool-pie-42ee74.netlify.app/" className ="btn project-link-btn waves-effect waves-light center-div">Site</a>
                                </div>
            
                            </div>

                            <div className = "project-info" data-aos = {domWidthRight}>
                                <h5><b>Review.me</b></h5>
                                <p>A web page using <a href = "https://developers.themoviedb.org/3/getting-started/introduction"><b>The Movie Database</b></a>, bringing trending movies, and most up to date movie trailers to the user. </p>
                                
                            </div>

                            <div className = "tech-div center-div" data-aos="flip-down">
                                <p className = "tech-div-text">Javascript</p>
                                <p className = "tech-div-text">Scss</p>
                                <p className = "tech-div-text">Html</p>
                                <p className = "tech-div-text">Bootstrap</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className = "col m6 s12 ">

                        <div className = "project-box-right" data-aos="flip-down">
                                <div className = "project-img-container">
                                    <img className = "project-img" src = {Img2} style={{ filter: "grayscale(100%)" }}></img>

                                    <div className = "project-links center-div">
                                        <a href = "https://github.com/PhilwithoneL/ambrosia-kitchens" className ="btn project-link-btn waves-effect waves-light center-div">Github</a>
                                        <a href="https://dulcet-fudge-a3f1ad.netlify.app" className ="btn project-link-btn  waves-effect waves-light center-div">Site</a>
                                    </div>
                
                                </div>
                                <div className = "project-info" data-aos = {domWidthLeft}>
                                    <h5><b>Abrosia Kitchens</b></h5>
                                    <p>A website created for a kitchen renovation business, created with the <a href = "https://materializecss.com/"><b>Materialize</b></a> css framework, and using React routing</p>
                                
                                </div>
                                <div className = "tech-div center-div" data-aos="flip-up">
                                        <p className = "tech-div-text">React</p>
                                        <p className = "tech-div-text">Scss</p>
                                        <p className = "tech-div-text">Html</p>
                                        <p className = "tech-div-text">Materialize</p>
                                </div>
                            </div>


                    </div>
                </div>

                <div className = "row">
                    
                    <div className = "col m6 s12">

                        <div className = "project-box-left">
                            <div className = "project-img-container" data-aos="flip-up">
                                <img className = "project-img" src = {Img3} style={{ filter: "grayscale(100%)" }}></img>

                                <div className = "project-links center-div">
                                    <a href = "https://github.com/PhilwithoneL/weather-app" className ="btn project-link-btn waves-effect waves-light center-div">Github</a>
                                    <a href = "https://kaleidoscopic-otter-7d6a88.netlify.app/" className ="btn project-link-btn waves-effect waves-light center-div">Site</a>
                                </div>
            
                            </div>
                            <div className = "project-info" data-aos = {domWidthRight}>
                                <h5><b>The Weather App</b></h5>

                                <p>A react web application which finds the weather based on the users location, using the both the <a href = "https://openweathermap.org/api"><b>Open Weather Map</b></a>, and <a href = "https://opencagedata.com/api"><b>Open Cage Geocoding</b></a> APIs.</p> 

                            </div>
                            <div className = "tech-div center-div" data-aos="fade-down">
                                    <p className = "tech-div-text">React</p>
                                    <p className = "tech-div-text">Scss</p>
                                    <p className = "tech-div-text">Html</p>
                                    <p className = "tech-div-text">Tailwind</p>
                            </div>
                        </div>    

                    </div>

                    <div className = "col m6 s12 " data-aos="flip-down">

                        <div className = "project-box-right">
                            <div className = "project-img-container">
                                <img className = "project-img" src = {Img4} style={{ filter: "grayscale(100%)" }}></img>

                                <div className = "project-links center-div">
                                    <a href = "https://github.com/PhilwithoneL/The-Recipe-App" className ="btn project-link-btn waves-effect waves-light center-div">Github</a>
                                    <a href = "https://dancing-fairy-d91da5.netlify.app/" className ="btn project-link-btn waves-effect waves-light center-div">Site</a>
                                </div>
            
                            </div>
                            <div className = "project-info" data-aos = {domWidthLeft}>
                                <h5><b>The Recipe App</b></h5>
                                <p>A web application which finds recipes based on the ingredient the user enters, using the <a href = "https://spoonacular.com/food-api"><b>Spoonacular</b></a> API.</p>
                                
                            </div>
                            <div className = "tech-div center-div" data-aos="fade-down">
                                    <p className = "tech-div-text">Javascript</p>
                                    <p className = "tech-div-text">Scss</p>
                                    <p className = "tech-div-text">Html</p>
                                    <p className = "tech-div-text">Tailwind</p>
                            </div>
                        </div>

                    </div>
                    
                </div>

        </div>
    )
}

export default Projects
