// Bootstrap
import { EnvelopeAt } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="h2c">Get in Touch</h2>
      <h3 className="h3c">Contact Me</h3>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <EnvelopeAt size={25} />
            <h4>Email</h4>
            <h5>fabiobronze.work@gmail.com</h5>
            <a href="mailto:fabiobronze.work@gmail.com">Send a Message</a>
          </article>
        </div>
        <form></form>
      </div>
    </section>
  );
};

export default Contact;
