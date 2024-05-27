import aboutRight from "../assets/aboutRight.png";
import { useGlobalContext } from "../context/Context";
import Button from "./Button";

const About = () => {
  const { handleScrollToSection, aboutRef, contactRef } = useGlobalContext();
  return (
    <div className="about row container" id="about" ref={aboutRef}>
      <div className="container__content row">
        <div className="about__content__left">
          <div className="column column__left">
            <div className="sh2 f__w2 grey1">
              Expert Web and Mobile developer
            </div>
            <div className="h3 f__w2 oswald">About Me</div>
            <div className="about__line"></div>
          </div>
          <div className="sh3 grey3">
            I`m a web developer based in Samundri, Pakistan. With a passion for
            turning complex problems into simple, stunning, and intuitive
            solutions, I take pride in building functional, user-friendly, and
            visually-appealing websites. I add my personal touch to every
            projectMy ultimate aim as a developer is to help you communicate
            your message and brand identity in a creative and intuitive way.
            <br />
            <br />
            What I`m up to: 🧠 Learning new skills all the time! Currently, I`m
            diving into the world of mobile app development and full stack
            development. 👯‍♀️ Ready to work on anything related to ReactJS!
            Collaborating on projects, sharing knowledge, or seeking new
            opportunities for growth and learning… count me in!
          </div>
          <Button
            className="btn"
            onClick={() => handleScrollToSection(contactRef)}
          >
            Download CV
          </Button>
          {/* <a className="btn" onClick={() => handleScrollToSection(contactRef)}>
            Download CV
          </a> */}
        </div>
        <div className="about__content__right">
          <img src={aboutRight} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
