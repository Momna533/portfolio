import testimonial1 from "../assets/testimonials1.jpg";
import testimonial2 from "../assets/testimonials2.jpg";
const Testimonials = () => {
  return (
    <div className="testimonials row container">
      <div className="container__content row testimonials__content">
        <div className="row testimonials__container">
          <div className="row row__gap testimonials__entries">
            <div className="testimonials__entry">
              <div className="testimonials__entry__msg sh1 grey3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                quasi provident ipsam ducimus facere omnis iure cupiditate magni
                explicabo nesciunt?
              </div>
              <div className="column column__gap1">
                <div className="testimonials__entry__img">
                  <img src={testimonial1} alt="testimonial" />
                </div>
                <div className="sh1 oswald f__w1">Janelia Watson</div>
                <div className="sh4 grey3">CEO of XYZ</div>
              </div>
            </div>
            <div className="testimonials__entry">
              <div className="testimonials__entry__msg sh1 grey3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                quasi provident ipsam ducimus facere omnis iure cupiditate magni
                explicabo nesciunt?
              </div>
              <div className="column column__gap1">
                <div className="testimonials__entry__img">
                  <img src={testimonial2} alt="testimonial" />
                </div>
                <div className="sh1 oswald f__w1">John Doe</div>
                <div className="sh4 grey3">CEO of XYZ</div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
