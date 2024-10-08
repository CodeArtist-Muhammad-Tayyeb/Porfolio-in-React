import React from "react";
import "./ContactForm.css";
import messageIcon from "../../assets/messagesicon.png";

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper container">
      <div className="left-side-contact-form">
        <img src={messageIcon} alt="Contact Icon" />
      </div>

      <div className="right-side-contact-form">
        <div className="form-inputs">
          <input type="text" name="first-name" placeholder="First Name" />
          <input type="text" name="last-name" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <input type="email" name="email" placeholder="Email" />
        </div>

        <div className="form-textarea-wrapper">
          <textarea
            rows="8"
            placeholder="Write Your Message Here!"
          ></textarea>
          <button className="submit-button">Submit Now</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
