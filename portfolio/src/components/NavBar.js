import React from 'react'

const navBar = () => {
    return (
        <div>
            <div className = "nav-bar row">
                <div className = "link col m3 s1 center-div link-mobile"></div>
                <div className ="link col m2 s4 center-div"><p>About</p></div>
                <div className ="link col m2 s4 center-div"><p>Projects</p></div>
                <div className ="link col m2 s4 center-div"><p>Contact</p></div>
                <div className = "link col m3 s1 center-div link-mobile"></div>
            </div>
        </div>
    )
}

export default navBar
