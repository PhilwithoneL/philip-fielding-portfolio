import React, { useEffect, useState } from 'react';
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

    
  return (
    <div>

      <NavBar scrollOffset = {offset} />
      <AnimeNav />
      

      <InfoLinks  />
      <CaretUp />
      
      <Intro scrollOffset = {offset} />
      <Chimney scrollOffset = {offset} />

     
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
