import { useGlobalContext } from "../context/Context";
import { FaReact, FaNode, FaGit } from "react-icons/fa";

const Services = () => {
  const { servicesRef } = useGlobalContext();
  return (
    <div className="services row container" id="services" ref={servicesRef}>
      <div className="container__content column column__gap2">
        <div className="column">
          <div className="sh3 grey1 t__ca">What i do</div>
          <div className="h2 oswald t__uc f__w2">My services</div>
        </div>
        <div className="services__content">
          <div className="services__entry">
            <FaReact />
          </div>
          <div className="services__entry">
            <FaNode />
          </div>
          <div className="services__entry">
            <FaGit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
