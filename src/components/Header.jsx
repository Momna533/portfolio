import { FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { FiAlignRight } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useGlobalContext } from "../context/Context";
import Button from "./Button";
import Drawer from "./Drawer";

const Header = () => {
  const {
    handleScrollToSection,
    homeRef,
    activeLink,
    aboutRef,
    servicesRef,
    portfolioRef,
    contactRef,
    openDrawer,
    drawerOpen,
  } = useGlobalContext();
  return (
    <div className="header">
      <div className="header__content">
        {/*logo */}
        <a className="logo" onClick={() => handleScrollToSection(homeRef)}>
          <img src={logo} alt="logo" />
        </a>
        {/*nav */}
        <div className="nav">
          <div className="nav__content">
            <div className="nav__link">
              <Button
                className={activeLink === "home" ? "active" : ""}
                onClick={() => {
                  handleScrollToSection(homeRef);
                }}
              >
                {" "}
                <FaHome className="nav__link__icon" />
              </Button>
            </div>
            <div className="nav__link">
              <Button
                className={activeLink === "about" ? "active" : ""}
                onClick={() => {
                  handleScrollToSection(aboutRef);
                }}
              >
                <FaInfoCircle className="nav__link__icon" />
              </Button>
            </div>
            <div className="nav__link">
              <Button
                className={activeLink === "services" ? "active" : ""}
                onClick={() => {
                  handleScrollToSection(servicesRef);
                }}
              >
                <FaServicestack className="nav__link__icon" />
              </Button>
            </div>
            <div className="nav__link">
              <Button
                className={activeLink === "portfolio" ? "active" : ""}
                onClick={() => {
                  handleScrollToSection(portfolioRef);
                }}
              >
                <GrProjects className="nav__link__icon" />
              </Button>
            </div>
            <div className="nav__link">
              <Button
                className={activeLink === "contact" ? "active" : ""}
                onClick={() => {
                  handleScrollToSection(contactRef);
                }}
              >
                <GrContact className="nav__link__icon" />
              </Button>
            </div>
          </div>
        </div>
        {/*menuBtn */}
        <Button className="menu__btn" onClick={openDrawer}>
          <FiAlignRight className="menu__icon" />
        </Button>
        {/*drawer */}
        {drawerOpen && <Drawer />}
      </div>
    </div>
  );
};

export default Header;
