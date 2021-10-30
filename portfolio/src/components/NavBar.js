const NavBar = ({scrollOffset}) => {

    // const scrollNav =scrollOffset / 50;

    // console.log(scrollNav);

    const scrollPositionNav = scrollOffset * 50;   
  
        switch(scrollPositionNav) {

            case 100 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 0%)";
                break;
            case 150 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 10%)";
                break;
            case 200 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 20%)";
                break;
            case 250 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 30%)";
                break;
            case 300 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 40%)";
                break;
            case 350 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 50%)";
                break;
            case 400 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 60%)";
                break;
            case 450 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 70%)";
                break;
            case 500 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 80%";
                break;
            case 550 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 90%)";
                break;
            case 600 :
                document.getElementById("navBar").style.backgroundColor = "rgb(30, 32, 36, 100%)";
                break;
        }


    return (
            <div className = "nav-bar row" id ="navBar">
                <div className = "col m3 s1 center-div link-mobile"></div>
                <div className ="link col m2 s4 center-div"><p className = "link-text">About</p></div>
                <div className ="link col m2 s4 center-div"><p className = "link-text">Projects</p></div>
                <div className ="link col m2 s4 center-div"><p className = "link-text">Contact</p></div>
                <div className = "col m3 s1 center-div link-mobile"></div>
            </div>
    )
}

export default NavBar
