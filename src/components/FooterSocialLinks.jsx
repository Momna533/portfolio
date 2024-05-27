import Button from "./Button";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const FooterSocialLinks = () => {
  return (
    <div className="row column__gap1 row__wrap">
      <div className="footer__social__link row">
        <Button
          varient="link"
          target="_blank"
          href="https://www.facebook.com"
          className="row"
        >
          <FaFacebookF className="footer__social__icon" />
        </Button>
      </div>
      <div className="footer__social__link row">
        <Button
          varient="link"
          target="_blank"
          href="https://www.twitter.com"
          className="row"
        >
          <FaTwitter className="footer__social__icon" />
        </Button>
      </div>
      <div className="footer__social__link row">
        <Button
          varient="link"
          target="_blank"
          href="https://www.instagram.com/momna00000"
          className="row"
        >
          <FaInstagram className="footer__social__icon" />
        </Button>
      </div>
      <div className="footer__social__link row">
        <Button
          varient="link"
          target="_blank"
          href="https://www.github.com/momna533"
          className="row"
        >
          <FaGithub className="footer__social__icon" />
        </Button>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
