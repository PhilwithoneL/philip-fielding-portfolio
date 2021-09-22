import React from 'react'

const SpaceInvader = () => {

    const spaceGrid = [];
    const positionArray = [0];
    
    
    for(let i = 0; i < 150; i++) {

         
        const gridCount = i;
        
        const positionCount = positionArray[i] + 5;

        positionArray.push(positionCount);
        
        console.log(positionArray)
        console.log(spaceGrid);

        const gridDivX = <div className = {`space-grid-section ${gridCount}`} style={{left:`${positionCount}px`}}></div>;

        spaceGrid.push(gridDivX);

    }
    

    return (
        <div>
            <div className = "space-grid-container">
                {spaceGrid}
            </div>
        </div>
    )
}

export default SpaceInvader
