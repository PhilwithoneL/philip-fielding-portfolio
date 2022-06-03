import React, { useEffect, useState } from 'react';
import Img1 from '../img/reviewme.jpg';
import Img2 from '../img/AbrosiaKitchens.jpg';
import Img3 from '../img/the-weather-app-img.jpg';
import Img4 from '../img/the-recipe-app-img.jpg';

const Projects = ({domWidthLeft, domWidthRight, findAbout,colorMode}) => {



    let projectStyle;
    let projectBtn;
    let imgFilter;
    let border;
     


        if(colorMode === "light") {

            projectStyle = "project-section-light"
            projectBtn ="btn project-link-btn-light waves-effect waves-light center-div"
            border =  "project-img-container-light"

        } else if (colorMode === "dark") {
            
            projectStyle = "project-section"
            projectBtn = "btn project-link-btn waves-effect waves-light center-div"
            border =  "project-img-container"
            
    }

    return (
            <div className = {projectStyle} >

            <div className = "projects-container">

                <h2 className = "project-header">Projects</h2>
                <div className = "row projects-row">
                    
                    <div className = "col m6 s12" >

                        <div className = "project-box-left" >

                            <div className = {border} data-aos = "flip-up">
                                <img className = "project-img" src = {Img1} ></img>

                                <div className = "project-links center-div">
                                    <a href = "https://github.com/PhilwithoneL/review.me" className ={projectBtn}>Github</a>
                                    <a href = "https://re-viewme.netlify.app/" className ={projectBtn}>Site</a>
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
                                <div className = {border}>
                                    <img className = "project-img" src = {Img2} ></img>

                                    <div className = "project-links center-div">
                                        <a href = "https://github.com/PhilwithoneL/ambrosia-kitchens" className ={projectBtn}>Github</a>
                                        <a href="https://ambrosia-kitchens.netlify.app/" className ={projectBtn}>Site</a>
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
                            <div className = {border} data-aos="flip-up">
                                <img className = "project-img" src = {Img3}></img>

                                <div className = "project-links center-div">
                                    <a href = "https://github.com/PhilwithoneL/weather-app" className ={projectBtn}>Github</a>
                                    <a href = "https://op-weather-app.netlify.app/" className ={projectBtn}>Site</a>
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

                    <div className = "col m6 s12 " >

                        <div className = "project-box-right">
                            <div className = {border}>
                                <img className = "project-img" src = {Img4}></img>

                                <div className = "project-links center-div">
                                    <a href = "https://github.com/PhilwithoneL/The-Recipe-App" className ={projectBtn}>Github</a>
                                    <a href = "https://the-recipeapp.netlify.app/" className ={projectBtn}>Site</a>
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

        </div>
    )
}

export default Projects
