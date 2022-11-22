import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  let [senderName, setSenderName] = useState("");
  let [senderEmail, setSenderEmail] = useState("");
  let [senderPhone, setSenderPhone] = useState("");
  let [message, setMessage] = useState("");

  function updateTextState(event) {
    switch (event.target.name) {
      case "sender_name":
        setSenderName(event.target.value);
        break;
      case "sender_email":
        setSenderEmail(event.target.value);
        break;
      case "sender_phone":
        setSenderPhone(event.target.value);
        break;
      default:
        setMessage(event.target.value);
        break;
    }
  }

  let contactFormInputs = {
    sender_name: senderName,
    sender_email: senderEmail,
    sender_phone: senderPhone,
    message: message,
  };

  console.log(contactFormInputs); //just to remove warning - use this for emailJS

  return (
    <div className="contactFormDiv">
      <h3>Contact Me</h3>
      <h6>
        <a href="mailto:artsing8@gmail.com">artsing8@gmail.com</a>
      </h6>
      <h6>(520) 850-6251</h6>
      <form className="contactForm">
        <div className="formGroup">
          <label htmlFor="exampleFormControlInput1">Your Name</label>
          <input
            type="text"
            className="form-control nameInput"
            placeholder="First Last"
            name="sender_name"
            onChange={updateTextState}
          ></input>

          <p className="feedbackText nameFeedback"></p>
        </div>
        <div className="formGroup">
          <label htmlFor="exampleFormControlInput1">Your Email</label>
          <input
            type="email"
            className="form-control emailInput"
            placeholder="name@example.com"
            name="sender_email"
            onChange={updateTextState}
          ></input>
          <p className="feedbackText emailFeedback"></p>
        </div>
        <div className="formGroup">
          <label htmlFor="exampleFormControlInput1">Your Phone Number</label>
          <input
            type="phone"
            className="form-control phoneInput"
            placeholder="000-000-0000"
            name="sender_phone"
            onChange={updateTextState}
          ></input>
          <p className="feedbackText phoneFeedback"></p>
        </div>
        <div className="formGroup">
          <label htmlFor="exampleFormControlTextarea1">Your Message</label>
          <textarea
            className="form-control messageInput"
            rows="3"
            name="message"
            onChange={updateTextState}
          ></textarea>
          <p className="feedbackText messageFeedback"></p>
        </div>
        <button type="submit" className="custom-btn">
          Send Email
        </button>
        <p className="sendFeedback"></p>
      </form>
    </div>
  );
}

export default Contact;
