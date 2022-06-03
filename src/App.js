import React, { useEffect, useState, useRef } from 'react';
import Intro from "./components/Intro";
import AnimeNav from "./components/AnimeNav";
import Chimney from "./components/Chimney";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Tech from "./components/Tech";
import InfoLinks from "./components/InfoLinks";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import '../node_modules/aos/dist/aos.css';
import AOS from "../node_modules/aos/dist/aos.js";
import { get } from 'react-scroll/modules/mixins/scroller';

function App() {

  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const homeRef = useRef();
  const techRef = useRef();


  const findAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    console.log('About clicked')
  }

  const findTech = () => {
    techRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    console.log('About clicked')
  }


  const findProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    console.log('About clicked')
  }

  const findContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    console.log('About clicked')
  }

  const findHome = () => {
    const y = 0;

    window.scrollTo({ top: y, behavior: "smooth", block: "start"});
    console.log('About clicked')
  }

  AOS.init();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [offset, setOffset] = useState(0);

    useEffect(() => {

        window.onscroll = () => {
            setOffset(Math.floor(window.pageYOffset / 30));
          }
    
    }, []);

    const width = window.innerWidth;

    
    const [domWidthLeft, setDomWidthLeft] = useState();
    const [domWidthRight, setDomWidthRight] = useState();

    const setWidthAosRight = () => {
        if(width < 1000) {
        
            setDomWidthRight("fade-up");
        
        } else {
    
            setDomWidthRight('fade-right');
            
        }
    }

    
    const setWidthAosLeft = () => {
        if(width < 1000) {
        
            setDomWidthLeft("fade-up");
        
        } else {
    
            setDomWidthLeft('fade-left');
            
        }
    }
    

    useEffect(() => {

        setWidthAosRight();
        setWidthAosLeft();

    }, [1]);

    const [colorMode, setColorMode] = useState("dark");


    const colorModeSelect = () => {

      console.log("clicked")

        if(colorMode === "light") {
          setColorMode("dark")
          console.log(colorMode)
        } else if(colorMode === "dark") {
          setColorMode("light")
          console.log(colorMode)
        }

    } 

    let mainColors;

    if(colorMode === "light") {

      mainColors = {

        background: "#F0F7F4",
        color: "#11262C",
        fontWeight: "700"

    }

    }

 


  return (

      <div id = "mainDiv" ref = { homeRef } style={mainColors}>

      
      <NavBar scrollOffset = {offset} findAbout = {findAbout} findProject = {findProject} findHome = {findHome} findContact = {findContact} findTech = {findTech} colorModeSelect = {colorModeSelect} colorMode = {colorMode}/>
      
      <AnimeNav findAbout = {findAbout} findProject = {findProject} findContact = {findContact} findTech = {findTech} />
      <InfoLinks colorMode = {colorMode} />      
      
      <Intro />
      <Chimney colorMode = {colorMode} />

      <section className ="about-section-main" ref = { aboutRef }><About domWidthLeft = {domWidthLeft} domWidthRight = {domWidthRight} findProject ={findProject}/></section>
      <section className = "tech-section-main" ref = { techRef }><Tech domWidthLeft = {domWidthLeft} domWidthRight = {domWidthRight} /></section>
      <section className = "project-section-main " ref = { projectRef }><Projects domWidthLeft = {domWidthLeft} domWidthRight = {domWidthRight}  /></section>
      <section className = "contact-section-main" ref = {contactRef}><Contact /></section>
      <Footer />
    </div>
  );
}


export default App;
