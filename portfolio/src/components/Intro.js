import React from 'react'

const Intro = ({scrollOffset}) => {

    const scrollOffsetChimney = scrollOffset * 5;


    const scrollPositionLeft = `${scrollOffsetChimney - 20}%`
    
    const scaleOffset = Math.round(scrollOffset * 100);
    const scale = 10 - Math.round(scrollOffset);

    console.log(scale);
    

    const scrollPositionRight = `-${scrollOffsetChimney - 5}%`

    if(scrollOffset > 1) {
        document.getElementById("name").style.transform  = `scale(0.${scale})`;

        document.getElementById("intro").style.transform  = `scale(0.${scale})`;

    }

    if(scrollOffset === 1) {

        document.getElementById("name").style.transform  = `scale(1)`;
        document.getElementById("intro").style.transform  = `scale(1)`;
    }


    return (
        <div>
            <div className = "intro-row">
                <div className = "intro-container">
                    <h1 className = "name" id = "name">Philip Fielding</h1>
                    <h4 className = "intro" id = "intro">Frontend developer</h4>
                </div>
            </div>
        </div>
    )
}

export default Intro
