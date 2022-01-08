import Racet, { useEffect, useState } from 'react';
import Intro from "./components/Intro";
import AnimeNav from "./components/AnimeNav";
import Chimney from "./components/Chimney";
import NavBar from "./components/NavBar";
import About from "./components/About";
import InfoLinks from "./components/InfoLinks";
import Projects from "./components/Projects";
import CaretUp from "./components/CaretUp";
import Contact from "./components/Contact";
import '../node_modules/aos/dist/aos.css';
import AOS from "../node_modules/aos/dist/aos.js";

function App() {

  AOS.init();

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
        if(width < 600) {
        
            setDomWidthRight("fade-up");
        
        } else {
    
            setDomWidthRight('fade-right');
            
        }
    }
    
    const setWidthAosLeft = () => {
        if(width < 600) {
        
            setDomWidthLeft("fade-up");
        
        } else {
    
            setDomWidthLeft('fade-left');
            
        }
    }


    useEffect(() => {

        setWidthAosRight();
        setWidthAosLeft();

    }, [1]);


  return (
    <div id = "mainDiv" className = "hightlight">

      <NavBar scrollOffset = {offset} />
      <AnimeNav />
      <InfoLinks />      
      
      <Intro />
      <Chimney />

      <About domWidthLeft = {domWidthLeft} domWidthRight = {domWidthRight} />
      <Projects domWidthLeft = {domWidthLeft} domWidthRight = {domWidthRight}  />
      <Contact />
      
    </div>
  );
}

export default App;
