// // Hooks
// import React, { useRef } from "react";

// // Bootstrap
// import { EnvelopeAt, Telephone } from "react-bootstrap-icons";

// // Emailjs
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_j7w3vay",
//         "template_wgbtdfg",
//         form.current,
//         "T-HMAxGeiS3B1ROtW"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <section id="contact">
//       <h2>Get in Touch</h2>
//       <h3>Contact Me</h3>
//       <div className="container contact-container">
//         <div className="contact-options">
//           <article className="contact-option">
//             <EnvelopeAt size={20} className="email-icon" />
//             <p>Email</p>
//             <p className="ema-pho">fabiobronze.work@gmail.com</p>
//             <a href="mailto:fabiobronze.work@gmail.com">Send a Message</a>
//           </article>
//           <article className="contact-option">
//             <Telephone size={20} className="phone-icon" />
//             <p>Phone Number</p>
//             <p className="ema-pho">(+357) 966 255 037</p>
//             <a href="https://api.whatsapp.com/send?phone=966255037">
//               Send a Message
//             </a>
//           </article>
//         </div>
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name="name" placeholder="Name" required />
//           <input type="email" name="email" placeholder="E-Mail" required />
//           <textarea
//             name="message"
//             rows="7"
//             placeholder="Message"
//             required
//           ></textarea>
//           <button type="submit" className="btn btn-primary">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// Hooks
import { useState } from "react";

// Bootstrap
import { EnvelopeAt, Telephone } from "react-bootstrap-icons";

const Contact = () => {
  const formInitialDetails = {
    fullName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <h3>Contact Me</h3>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <EnvelopeAt size={20} className="email-icon" />
            <p>Email</p>
            <p className="ema-pho">fabiobronze.work@gmail.com</p>
            <a href="mailto:fabiobronze.work@gmail.com">Send a Message</a>
          </article>
          <article className="contact-option">
            <Telephone size={20} className="phone-icon" />
            <p>Phone Number</p>
            <p className="ema-pho">(+357) 966 255 037</p>
            <a href="https://api.whatsapp.com/send?phone=966255037">
              Send a Message
            </a>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formDetails.fullName}
            placeholder="Name"
            onChange={(e) => onFormUpdate("fullName", e.target.value)}
            required
          />
          <input
            type="email"
            value={formDetails.email}
            placeholder="E-Mail"
            onChange={(e) => onFormUpdate("email", e.target.value)}
            required
          />
          <textarea
            name="message"
            rows="7"
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
            required
          ></textarea>
          <button type="submit">
            <span>{buttonText}</span>
          </button>
          {status.message && (
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
