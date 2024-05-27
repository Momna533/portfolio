import { useGlobalContext } from "../context/Context";
import adoptPetImg from "../assets/adopt-a-pet.jpeg";
import portfolio1Img from "../assets/portfolio-1.jpeg";

const Portfolio = () => {
  const { portfolioRef } = useGlobalContext();
  return (
    <div className=" gallery row container" id="portfolio" ref={portfolioRef}>
      <div className="container__content column column__gap2">
        <div className="column">
          <div className="sh3 grey1 t__ca">Portfolio</div>
          <div className="h2 oswald t__uc f__w2">WORK I HAVE DONE</div>
        </div>
        <div className="row">
          <div className="row row__wrap">
            <a
              className="gallery__entry"
              target="_blank"
              href="https://github.com/Momna533/portfolio-1"
            >
              <img src={adoptPetImg} alt="gallery" />
            </a>
            <a
              className="gallery__entry"
              target="_blank"
              href="https://github.com/Momna533/adopt-a-pet"
            >
              <img src={portfolio1Img} alt="gallery" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
