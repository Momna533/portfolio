import { useGlobalContext } from "../context/Context";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

const Jumbotron = () => {
  const { homeRef, handleScrollToSection, contactRef } = useGlobalContext();
  return (
    <div className="section home row" id="home" ref={homeRef}>
      <div className="home__content container__content">
        <div className="column column__left column__gap1">
          <div className="column column__left">
            <div className="sh1 t__uc oswald l__s1">I am momna ijaz</div>
            <div className="h1 t__uc oswald f__w1">Software developer</div>
          </div>
          <Button
            className="btn"
            onClick={() => handleScrollToSection(contactRef)}
          >
            contact me
          </Button>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Jumbotron;
