import Button from "./Button";

const ContactForm = () => {
  return (
    <form action="" className="column column__left">
      <div className="row inputs__row">
        <input type="text" placeholder="your name" />
        <input type="text" placeholder="your email" />
      </div>
      <div className="row inputs__row">
        <input type="text" placeholder="your phone" />
        <input type="text" placeholder="your address" />
      </div>
      <div className="row inputs__row">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="your message"
        ></textarea>
      </div>
      <Button className="submit__btn">submit</Button>
    </form>
  );
};

export default ContactForm;
