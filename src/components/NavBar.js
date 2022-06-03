import { RiHome2Fill } from 'react-icons/ri';
import { AiFillCaretUp } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';


const NavBar = ({ scrollOffset, findAbout, findProject, findContact, findHome, findTech, colorModeSelect, colorMode}) => {

    let linkColor;
    let navStyle;

    const colorModeBtnStyle = {
        fontSize: "40px",
        position: "relative",
        top:"5px",
        zIndex: "100",
        color: "rgb(174, 212, 255);",
        cursor: "pointer"

    }

    if(colorMode === "light") {
        linkColor = {
            color:"black"
        }

        navStyle = {
            backdropFilter: "blur(10px)"
        }

    } else if (colorMode === "dark") {
        linkColor = {
            color:"rgb(174, 212, 255)"
        }

        navStyle = {
            backdropFilter: "blur(10px)"
        }
    }



    const scrollPositionNav = scrollOffset * 50;   

        const caretAdd = () => {
            if(scrollPositionNav < 400) {
                document.getElementById('caret').style.display = 'none';
            } else {
                document.getElementById('caret').style.display = 'block';
            };
        }

        setTimeout(caretAdd, 200);

        if(colorMode === "dark") {

            switch(scrollPositionNav) {

                case 100 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 0%)";
                    break;
                case 150 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 10%)";
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
                // case 400 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 60%)";
                //     break;
                // case 450 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 70%)";
                //     break;
                // case 500 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 80%";
                //     break;
                // case 550 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 90%)";
                //     break;
                // case 600 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(14, 14, 14, 100%)";
                    
                //     break;
            }


        } else {
            
            switch(scrollPositionNav) {

                case 100 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 0%)";
                    break;
                case 150 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 10%)";
                    break;
                case 200 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 20%)";
                    
                    break;
                case 250 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 30%)";
                    break;
                case 300 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 40%)";
                    break;
                case 350 :
                    document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 50%)";
                    break;
                // case 400 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(1255, 255, 255, 60%)";
                //     break;
                // case 450 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 70%)";
                //     break;
                // case 500 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 80%";
                //     break;
                // case 550 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 90%)";
                //     break;
                // case 600 :
                //     document.getElementById("navBar").style.backgroundColor = "rgb(255, 255, 255, 100%)";
                    
                //     break;
            }

        }


    return (

        <div>
            <div className = "nav-bar row" id ="navBar" style={navStyle}>
                <div className = "col m2 center-div"></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findAbout} style = {linkColor}>About</p></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findTech} style = {linkColor}>Tech</p></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findProject} style = {linkColor}>Projects</p></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findContact} style = {linkColor}>Contact</p></div>
                <div className = "link col m2 center-div "><div style = {colorModeBtnStyle} className = "link-text"><CgDarkMode onClick = {colorModeSelect} style = {linkColor}/></div></div> 

      
            </div>
            
            <div className ="caret-position" id = "caret">
                <AiFillCaretUp className = "caret-icon" onClick = { findHome } style = {linkColor}/>
            </div>
          
        </div>


    )

    


}

export default NavBar
