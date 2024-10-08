import React from "react";
import "./ContactForm.css";
import messageIcon from "../../assets/messagesicon.png";


const ContactForm = () => {
  return (
    <>
      <div className="ContactForm container">
        <div className="leftSideOfContactForm">
          <img src={messageIcon} alt="" />
        </div>

        <div className="rightSideOfContactForm">
          <div className="formsInputs">
            <input type="text" name="name" id="" placeholder="First Name" />
            <input type="text" name="" id="" placeholder="Last Name" />
            <input type="text" name="" id="" placeholder="Phone" />
            <input type="email" name="" id="" placeholder="Email" />
          </div>

          <div className="forms-btn" >
            <textarea
              rows="8"
              cols="60"
              placeholder="Write Your Message Here!"
            ></textarea>
            <br />
            <button className="submit-btn">Submit Now</button>
          </div>
        </div>
      </div>


    </>
  );
};
export default ContactForm;
