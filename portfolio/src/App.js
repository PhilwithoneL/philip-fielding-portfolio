import Intro from "./components/Intro";
import AnimeNav from "./components/AnimeNav";
import Chimney from "./components/Chimney";
import NavBar from "./components/NavBar";
import About from "./components/About"
import Projects from "./components/Projects"
import CaretUp from "./components/CaretUp";

function App() {
  return (
    <div>

      <NavBar />
      <AnimeNav />


      <Intro />
      <Chimney />

      <About />
      <Projects />
    
      <CaretUp />
    </div>
  );
}

export default App;
