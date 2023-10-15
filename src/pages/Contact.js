import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Footer from "./FooterWithoutClients";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// const sgMail = require('@sendgrid/mail');

// const API_KEY = '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';

// sgMail.setApiKey(API_KEY);

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isValid, setIsValid] = useState(true);

  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleChangeEmail = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  const handleChangePhone = (e) => {
    const inputValue = e.target.value;
    setPhoneNumber(inputValue);
    setIsValid(validatePhoneNumber(inputValue));
  };

  const validatePhoneNumber = (phone) => {
    // Define a regex pattern for a valid phone number
    const phonePattern = /^(?=.*\d)[\d\s()+-]+$/; // For a 10-digit phone number

    // Test if the input matches the pattern
    return phonePattern.test(phone);
  };

  // const sendEmail = (e) => {

  //   // Perform other form submission logic here
  //   toast.info("Form submitted successfully.", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });

  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_on007tm", //Service ID
  //       "template_bu7b7wn", //Template ID
  //       form.current,
  //       "i1DdlPhcWSt426QAt" //Public Key
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const onComplete = (e) => {
    e.preventDefault();

    if (
      phoneNumber.trim() === "" ||
      email.trim() === "" ||
      lastName.trim() === "" ||
      firstName.trim() === "" ||
      message.trim() === ""
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
    } else {
      if (isValid === false) {
        toast.error("Invalid phone number.", {
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
      } else {
        if (isValidEmail === false) {
          toast.error("Invalid email.", {
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
      }
    }
    const emailData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      message: message,
    };

    fetch("http://localhost:4000/send-email", {
      method: "POST", // Set the request method to POST
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(emailData), // Convert the data to a JSON string
    })
      .then((response) => {
        if (response.ok) {
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
          setEmail("");
          setPhoneNumber("");
          setFirstName("");
          setLastName("");
          setMessage("");
        } else {
          console.log("Email could not be sent");
        }
      })
      .catch((err) => console.log(err));
  };

  //   e.preventDefault();

  //     if (
  //       textareaValue.trim() === "" ||
  //       phoneNumber.trim() === "" ||
  //       email.trim() === "" ||
  //       textareaValue4.trim() === "" ||
  //       textareaValue5.trim() === ""
  //     ) {
  //       toast.error("Please fill in all required fields.", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //       return;
  //     } else {
  //       if (isValid === false) {
  //         toast.error("Invalid phone number.", {
  //           position: "top-center",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //         return;
  //       } else {
  //         if (isValidEmail === false) {
  //           toast.error("Invalid email.", {
  //             position: "top-center",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //           return;
  //         }
  //       }
  //     }

  //   sgEmail
  //     .send(message)
  //     .then(() => {
  //       form.resetFields();

  //       // notification.open({
  //       //   message: "Message successfu!",
  //       //   description: "We have successfully received your email.",
  //       // });
  //     })
  //     // .catch((error) => {
  //     //   console.error("Error: ", error);
  //     // });
  // };

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

            <form ref={form} onSubmit={onComplete} className="theForm">
              <div className="firstLastName">
                <span className="FNLabel">First Name</span>
                <input
                  className="placeholderFirstLast"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <span className="LNLabel">Last Name</span>
                <input
                  className="placeholderFirstLast"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <span className="emailLabel">Email</span>
                <input
                  className="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                  // value={textareaValue3}
                  // onChange={(e) => setTextareaValue3(e.target.value)}
                />
              </div>
              <div>
                <span className="emailLabel">Phone</span>

                <input
                  className="phone"
                  name="phone"
                  // value={textareaValue2}
                  // onChange={(e) => setTextareaValue2(e.target.value)}
                  type="text"
                  value={phoneNumber}
                  onChange={handleChangePhone}
                />
                {/* {!isValid && <p style={{ color: "red" }}>Invalid phone number</p>} */}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="messageLabel">Message</span>
                <textarea
                  className="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
