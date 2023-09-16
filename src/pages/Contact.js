import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import FooterWithoutClients from "./FooterWithoutClients";

const Contact = () => {
  const form = useRef();
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaValue2, setTextareaValue2] = useState("");
  const [textareaValue3, setTextareaValue3] = useState("");
  const [textareaValue4, setTextareaValue4] = useState("");
  const [textareaValue5, setTextareaValue5] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      textareaValue.trim() === "" ||
      textareaValue2.trim() === "" ||
      textareaValue3.trim() === "" ||
      textareaValue4.trim() === "" ||
      textareaValue5.trim() === ""
    ) {
      alert("Textarea must not be empty.");
      return;
    }

    // Perform other form submission logic here
    alert("Form submitted successfully.");

    setTextareaValue("");
    setTextareaValue2("");
    setTextareaValue3("");
    setTextareaValue4("");
    setTextareaValue5("");

    e.preventDefault();

    emailjs
      .sendForm(
        "service_on007tm",
        "template_bu7b7wn",
        form.current,
        "i1DdlPhcWSt426QAt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mainContact">
      <div className="contactform">
        <div className="leftWhiteDiv">
          <p className="yourDesignVoice"> 
            <span className="design">YOUR DESIGN,</span>
            <br />
            <span className="voice">YOUR VOICE</span>
          </p>
        </div>
        <div className="rightBlueDiv">
        <span className="talkAbtVision">LET'S TALK ABOUT YOUR VISION!</span>
          <form ref={form} onSubmit={sendEmail} className="theForm">
             <div className="firstLastName">
              <input
                className="placeholder"
                type="text"
                name="firstName"
                placeholder="First Name"
                style={{
                  height: "40px",
                  width: "230px",
                  borderRadius: "16px",
                  border: "none",
                }}
                value={textareaValue5}
                onChange={(e) => setTextareaValue5(e.target.value)}
              />
              <input
                className="placeholder"
                type="text"
                name="lastName"
                placeholder="Last Name"
                style={{
                  height: "40px",
                  width: "230px",
                  borderRadius: "16px",
                  border: "none",
                }}
                value={textareaValue4}
                onChange={(e) => setTextareaValue4(e.target.value)}
              />
            </div> 
            <div>
              <input
                className="placeholder"
                type="email"
                name="email"
                placeholder="Email"
                style={{
                  width: "500px",
                  height: "45px",
                  borderRadius: "16px",
                  border: "none",
                }}
                value={textareaValue3}
                onChange={(e) => setTextareaValue3(e.target.value)}
              />
            </div>
            <div >
              <input
                className="placeholder"
                type="text"
                name="phone"
                placeholder="Phone"
                style={{
                  width: "500px",
                  height: "40px",
                  borderRadius: "16px",
                  border: "none",
                }}
                value={textareaValue2}
                onChange={(e) => setTextareaValue2(e.target.value)}
              />
            </div>
            <textarea
              className="placeholder"
              name="message"
              placeholder="Message..."
              style={{
                paddingTop:'10px',
                width: "500px",
                height: "240px",
                borderRadius: "16px",
                border: "none",
                resize: "none",
              }}
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
            {/* <input
              type="submit"
              value="SEND"
              className="send"
              style={{
                width: "100px",
                height: "35px",
                
                fontFamily: "boldFont",
                border: "none",
                outline: "none",
                borderRadius: "20px",
                fontSize: "19px",
              }}
            />  */}
                 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
