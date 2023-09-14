import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import FooterWithoutClients from "./FooterWithoutClients";


const Contact = () => {
  const form = useRef();
  const [textareaValue, setTextareaValue] = useState('');
  const [textareaValue2, setTextareaValue2] = useState('');
  const [textareaValue3, setTextareaValue3] = useState('');
  const [textareaValue4, setTextareaValue4] = useState('');
  const [textareaValue5, setTextareaValue5] = useState('');
  const sendEmail = (e) => {
   
      

      e.preventDefault();
  
      if (textareaValue.trim() === '' ||textareaValue2.trim() === '' ||textareaValue3.trim() === '' ||textareaValue4.trim() === '' ||textareaValue5.trim() === ''  ) {
        alert('Textarea must not be empty.');
        return;
      }
  
      // Perform other form submission logic here
      alert('Form submitted successfully.');

      setTextareaValue('');
      setTextareaValue2('');
      setTextareaValue3('');
      setTextareaValue4('');
      setTextareaValue5('');

    
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
      <div
        style={{
          width: "1100px",
          height: "600px",
          display: "flex",
          flexDirection: "row",

        }}
        className="contactform"
      >
        <div
          style={{ width: "470px", height: "600px", backgroundColor: "white" , borderTopLeftRadius:'22px',
          borderBottomLeftRadius:'22px', 
        }}
        >
          <p style={{ marginLeft: "40px", marginTop: "50px", lineHeight: "1" }}>
            <span style={{ fontSize: "40px", fontFamily: "boldFont", color:'#4aa9ea'}}>
              YOUR DESIGN,
            </span>
            <br />
            <span
              style={{
                fontSize: "40px",
                fontFamily: "regFont",
                marginLeft: "1px",
                color:'#4aa9ea'
              }}
            >
              YOUR VOICE
            </span>
          </p>
        </div>
        <div
          style={{
            width: "630px",
            height: "600px",
            backgroundColor: "#4aa9ea",
            display: "flex",
            flexDirection: "column",
            borderTopRightRadius:'22px',
            borderBottomRightRadius:'22px'
          }}
        >
          <h1 style={{ fontFamily: "regFont", marginLeft: "60px", color:'white'}}>
            {" "}
            LET'S TALK ABOUT YOUR VISION!
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              justifySelf: "flex-start",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "65px",
              }}
            >
              <input
                className="placeholder"
                type="text"
                name="firstName"
                placeholder="First Name"
                style={{
                  height: "40px",
                  marginRight: "20px",
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
                  marginLeft: "20px",
                  borderRadius: "16px",
                  border: "none",
                }}
                value={textareaValue4}
                onChange={(e) => setTextareaValue4(e.target.value)}
              />
            </div>
            <div style={{ marginLeft: "65px", marginTop: "20px" }}>
              <input
                className="placeholder"
                type="email"
                name="email"
                placeholder="Email"
                style={{
                  width: "500px",
                  height: "40px",
                  borderRadius: "16px",
                  border: "none",
                }}
                value={textareaValue3}
                onChange={(e) => setTextareaValue3(e.target.value)}
              />
            </div>
            <div style={{ marginLeft: "65px", marginTop: "20px" }}>
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
                marginLeft: "65px",
                marginTop: "20px",
                paddingTop:'10px',
                width: "500px",
                height: "240px",
                borderRadius: "16px",
                border: "none",
                resize:'none'
              }}
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
            <input
              type="submit"
              value="SEND"
              className="send"
              style={{
                width: "100px",
                height: "35px",
                marginLeft: "465px",
                marginTop: "20px",
                fontFamily:'boldFont',
                border:'none',
                outline:'none',
                borderRadius:'20px',
                fontSize:'19px'
              }}
            />
                
          </form>
        </div>
      </div>
      <FooterWithoutClients/>
    </div>
  );
};

export default Contact;
