import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
