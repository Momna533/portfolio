import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./Button";

const SocialLinks = () => {
  return (
    <div className="home__social__links__container column column__gap1">
      <div className="home__social__links__text oswald">social</div>
      <div className="home__social__links__line"></div>
      <div className="column column__gap1">
        <div className="home__social__link"></div>
        <div className="home__social__link">
          <Button target="_blank" href="https://www.twitter.com" varient="link">
            <FaInstagram className="home__social__icon" />
          </Button>
        </div>
        <div className="home__social__link">
          <Button target="_blank" href="https://www.twitter.com" varient="link">
            <FaLinkedin className="home__social__icon" />
          </Button>
        </div>
        <div className="home__social__link">
          <Button
            target="_blank"
            href="https://github.com/Momna533"
            varient="link"
          >
            <FaGithub className="home__social__icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
