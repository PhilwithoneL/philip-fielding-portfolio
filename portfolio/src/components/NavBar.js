import { RiHome2Fill } from 'react-icons/ri';
import { AiFillCaretUp } from 'react-icons/ai';


const NavBar = ({ scrollOffset, findAbout, findProject, findContact, findHome, findTech}) => {

    const scrollPositionNav = scrollOffset * 50;   

        const caretAdd = () => {
            if(scrollPositionNav < 400) {
                document.getElementById('caret').style.display = 'none';
            } else {
                document.getElementById('caret').style.display = 'block';
            };
        }

        setTimeout(caretAdd, 200);

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

        <div>
            <div className = "nav-bar row" id ="navBar">
                <div className = "col m2 center-div"></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findAbout}>About</p></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findTech}>Tech</p></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findProject}>Projects</p></div>
                <div className ="link col m2 center-div"><p className = "link-text" onClick = {findContact}>Contact</p></div>
                <div className = "col m2 center-div"></div> 

      
            </div>
            
            <div className ="caret-position" id = "caret">
                <AiFillCaretUp className = "caret-icon" onClick = { findHome } />
            </div>
          
        </div>


    )

    


}

export default NavBar
