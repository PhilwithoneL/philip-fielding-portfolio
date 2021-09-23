import React from 'react'

const navBar = () => {
    return (
        <div>
            <div className = "nav-bar row">
                <div className = "col m3 s1 center-div link-mobile"></div>
                <div className ="link col m2 s4 center-div"><p className = "link-text">About</p></div>
                <div className ="link col m2 s4 center-div"><p className = "link-text">Projects</p></div>
                <div className ="link col m2 s4 center-div"><p className = "link-text">Contact</p></div>
                <div className = "col m3 s1 center-div link-mobile"></div>
            </div>
        </div>
    )
}

export default navBar
