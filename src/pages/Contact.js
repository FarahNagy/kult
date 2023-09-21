import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Footer from "./FooterWithoutClients";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.error("Please fill in all required fields.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // Perform other form submission logic here
    toast.info("Form submitted successfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
    <>
      <div className="mainContact">
        <div className="topLeft" />
        <div className="topRight" />
        <div className="bottomLeft" />
        <div className="bottomRight" />
        <div className="contactform">
          <div className="leftWhiteDiv">
            <p className="yourDesignVoice">
              <span className="design">YOUR DESIGN,</span>
              <br />
              <span className="voice">YOUR VOICE</span>
            </p>
            <div className="whiteDivBack">
              <div className="laptopIllust" />
            </div>
          </div>
          <div className="rightBlueDiv">
            <span className="talkAbtVision">LET'S TALK ABOUT YOUR VISION!</span>
            <form ref={form} onSubmit={sendEmail} className="theForm">
              <div className="firstLastName">
                <span className="FNLabel">First Name</span>
                <input
                  className="placeholderFirstLast"
                  type="text"
                  name="firstName"
                  value={textareaValue5}
                  onChange={(e) => setTextareaValue5(e.target.value)}
                />
                <span className="LNLabel">Last Name</span>
                <input
                  className="placeholderFirstLast"
                  type="text"
                  name="lastName"
                  value={textareaValue4}
                  onChange={(e) => setTextareaValue4(e.target.value)}
                />
              </div>
              <div>
                <span className="emailLabel">Email</span>
                <input
                  className="email"
                  type="email"
                  name="email"
                  value={textareaValue3}
                  onChange={(e) => setTextareaValue3(e.target.value)}
                />
              </div>
              <div>
                <span className="emailLabel">Phone</span>

                <input
                  className="phone"
                  type="number"
                  name="phone"
                  value={textareaValue2}
                  onChange={(e) => setTextareaValue2(e.target.value)}
                  style={{
                    WebkitAppearance: "none", // For webkit browsers (Safari, Chrome)
                    MozAppearance: "textfield", // For Firefox
                    appearance: "none", // For other browsers
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="messageLabel">Message</span>
                <textarea
                  className="message"
                  name="message"
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                />
                <input type="submit" value="SEND" className="send" />
              </div>
                  
            </form>
          </div>
        </div>
        <div className="footerContact">
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
