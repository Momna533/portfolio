import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { FaArrowUp } from "react-icons/fa";
import { useGlobalContext } from "./context/Context";

const App = () => {
  const { handleScrollToSection, homeRef } = useGlobalContext();

  return (
    <div className="app">
      {/*header */}
      <Header />
      {/*home */}
      <Jumbotron />
      {/*about */}
      <About />
      {/*services */}
      <Services />
      {/*gallery */}
      <Portfolio />
      {/*testimonials */}
      <Testimonials />
      {/*contact */}
      <Contact />
      {/*footer */}
      <Footer />
      {/*back to top */}
      <Button
        className="floating__btn menu__btn"
        onClick={() => handleScrollToSection(homeRef)}
      >
        <FaArrowUp className="menu__icon" />
      </Button>
    </div>
  );
};

export default App;
