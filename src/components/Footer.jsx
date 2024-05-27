import logo from "../assets/logo.png";
import { useGlobalContext } from "../context/Context";
import FooterSocialLinks from "./FooterSocialLinks";

const Footer = () => {
  const { handleScrollToSection, homeRef } = useGlobalContext();
  return (
    <div className="footer">
      <div className="footer__content column column__gap1">
        <a className="logo" onClick={() => handleScrollToSection(homeRef)}>
          <img src={logo} alt="logo" />
        </a>
        <FooterSocialLinks />
        <div className="sh4 grey1">Copyright - 2020 Developed by AutWorks</div>
      </div>
    </div>
  );
};

export default Footer;
