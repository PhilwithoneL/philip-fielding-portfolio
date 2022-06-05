import React from 'react'

const Footer = ({colorMode}) => {

    let footerStyle;

    if(colorMode === "light") {

        footerStyle = {
            background: "#c2dcff"
        }

    }  else if (colorMode === "dark") {

        
        footerStyle = {
            background: "#0E0E0E"
        }
    }

    return (
        <div className ="footer-section" style = { footerStyle }>
            <div><a href ="https://github.com/PhilwithoneL/philip-fielding-portfolio" className =" center-div footer">@ 2022 Philip R. Fielding</a></div>
        </div>
    )
}

export default Footer;