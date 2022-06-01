import React from 'react'

export const Project = ({img, flip1, flip2, fade, tech1, tech2}) => {
    return (
        <div>
            
            <div className = "col m6 s12" >

            <div className = "project-box-left">
                <div className = "project-img-container" data-aos = {flip}>
                    <img className = "project-img" src = {img} style={{ filter: "grayscale(100%)" }}></img>

                    <div className = "project-links center-div">
                        <div className ="btn project-link-btn waves-effect waves-light btn">Github</div>
                        <div className ="btn project-link-btn waves-effect waves-light btn">Site</div>
                    </div>

                </div>
                <div className = "project-info" data-aos={fade}>
                    <h5><b>Review.me</b></h5>
                    <p>A web page using <a href = "https://developers.themoviedb.org/3/getting-started/introduction"><b>The Movie Database</b></a>, bringing trending movies, and most up to date movie trailers to the user. </p>
                    
                </div>
                <div className = "tech-div center-div" data-aos="flip-down">
                        <p className = "tech-div-text">{tech1}</p>
                        <p className = "tech-div-text">{tech2}</p>
                        <p className = "tech-div-text">{tech3}</p>
                        <p className = "tech-div-text">{tech4]</p>
                    </div>
            </div>


            </div>
        </div>
    )
}
export default Project;