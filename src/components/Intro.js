import React from 'react'

const Intro = ({colorMode}) => {

    let nameStyle;
    let introNameStyle;

    if(colorMode === "light") {

        nameStyle = {
            color:"#213138"
        }

        introNameStyle = {
            fontWeight: "700"
        }

    }

    return (

        <div className = "intro-container">
            <div className="intro-size">
                <h4 className = "greeting"><b className ="important" style = { nameStyle}>&nbsp;Hi there! My name's</b></h4>
                <h1 className = "name" id = "name" style = { nameStyle}>Philip Fielding</h1>
                <h4 className ="intro" style = { introNameStyle }>I make things for the Web</h4>
            </div>
        </div>

    )
}

export default Intro
    