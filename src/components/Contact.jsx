import { useGlobalContext } from "../context/Context";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { contactRef } = useGlobalContext();
  return (
    <div className="contact row container" id="contact" ref={contactRef}>
      <div className="container__content column contact__content">
        <div className="row contact__info">
          <div className="column column__left column__gap1 contact__info__left">
            <div className="h4 oswald f__w2 t__ca">My Contacts</div>
            <div className="sh3 grey2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, id?
            </div>
            <div className="h4 oswald f__w2 t__ca">Address</div>
            <div className="sh3">Muhallah Islamabad Street#2 Samundri</div>
            <div className="h4 oswald f__w2 t__ca">Phone</div>
            <div className="sh3">0337-7251311</div>
            <div className="sh3">0318-0707344</div>
            <div className="h4 oswald f__w2 t__ca">Email</div>
            <div className="sh3">momna533gb@gmail.com</div>
          </div>
          <div className="column column__left column__gap1 contact__info__right">
            <div className="h4 oswald f__w2 t__ca">Quick contact form</div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
