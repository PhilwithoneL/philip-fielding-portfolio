import React from 'react'
import { AiFillCaretUp } from 'react-icons/ai';


const CaretUp = ({ findHome }) => {

    return (
        <div>
            <div className ="caret-position">
            <AiFillCaretUp className = "caret-icon" onClick = { findHome } /></div>
        </div>            
    )
}

export default CaretUp
