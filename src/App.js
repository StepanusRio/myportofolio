import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Blog/>
      <Portofolio/>
      <Contact/>
    </div>
  );
}

export default App;
