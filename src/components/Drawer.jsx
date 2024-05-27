import { useGlobalContext } from "../context/Context";
import { IoMdClose } from "react-icons/io";
import home from "../assets/home.jpg";
import portfolio from "../assets/about.jpg";
import contact from "../assets/services.jpg";
import services from "../assets/portfolio.jpg";
import about from "../assets/contact.jpg";
import Button from "./Button";

const Drawer = () => {
  const {
    closeDrawer,
    handleScrollToSection,
    homeRef,
    aboutRef,
    servicesRef,
    portfolioRef,
    contactRef,
  } = useGlobalContext();
  return (
    <div className="drawer">
      <div className="drawer__content">
        {/*drawerBtn */}
        <Button className="close__drawer__btn" onClick={closeDrawer}>
          <IoMdClose className="close__icon" />
        </Button>
        {/*drawer nav */}
        <div className="drawer__nav">
          <div className="drawer__nav__content">
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(homeRef)}>
                <img src={home} alt="home" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(aboutRef)}>
                <img src={about} alt="about" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(servicesRef)}>
                <img src={services} alt="services" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(portfolioRef)}>
                <img src={portfolio} alt="portfolio" />
              </a>
            </div>
            <div className="drawer__nav__link" onClick={closeDrawer}>
              <a onClick={() => handleScrollToSection(contactRef)}>
                <img src={contact} alt="contact" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
