const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fabiobronze.work@gmail.com",
      pass: "906071116",
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  const { fullName, email, message } = JSON.parse(event.body);

  const mail = {
    from: fullName,
    to: "fabiobronze.work@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${fullName}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: "Message Sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
