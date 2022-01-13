import { RiHome2Fill } from 'react-icons/ri';
import { AiFillCaretUp } from 'react-icons/ai';


const NavBar = ({scrollOffset, findAbout, findProject, findHome, findContact}) => {

    const scrollPositionNav = scrollOffset * 50;   
  
        switch(scrollPositionNav) {

            case 100 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 0%)";
                // document.getElementById("homeBtn").style.display = "none";
                break;
            case 150 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 10%)";
                // document.getElementById("homeBtn").style.display = "block";
                break;
            case 200 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 20%)";
                
                break;
            case 250 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 30%)";
                break;
            case 300 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 40%)";
                break;
            case 350 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 50%)";
                break;
            case 400 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 60%)";
                break;
            case 450 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 70%)";
                break;
            case 500 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 80%";
                break;
            case 550 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 90%)";
                break;
            case 600 :
                document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 100%)";
                
                break;
        }


    return (
            <div className = "nav-bar row" id ="navBar">
                <div className = "col m3 s1 center-div link-mobile"></div>
                <div className ="link col m2 s4 center-div highlight"><p className = "link-text" onClick = {findAbout}>About</p></div>
                <div className ="link col m2 s4 center-div highlight"><p className = "link-text" onClick = {findProject} >Projects</p></div>
                <div className ="link col m2 s4 center-div highlight"><p className = "link-text" onClick = {findContact} >Contact</p></div>
                <div className = "col m3 s1 center-div link-mobile"></div>

                {/* <div>
                    <div className = "home-btn" id ="homeBtn">
                        <div className = "home-icon-box center-div" onClick = {findHome}><RiHome2Fill className= "home-icon"/></div>
                    </div>
                </div> */}

            {/* <div id = "homeBtn">
                <div className ="caret-position">
                <AiFillCaretUp className = "caret-icon" onClick = { findHome } /></div>
            </div>    */}

            </div>
    )
}

export default NavBar
