const nodemailer = require("nodemailer");

const sendMail = async (data) => {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Your SMTP server host
      port: 587, // SMTP server port
      secure: true, // Set to true if using SSL/TLS
      auth: {
        user: "lolashepota@example.com", // Your email address
        pass: "your-email-password" // Your email password or app password
      }
    });

    // Compose the email message
    const message = {
      from: "your-email@example.com", // Sender email address
      to: "your-email@example.com", // Recipient email address
      subject: "New Contact Form Submission",
      text: `
        Full Name: ${data.fullName}
        Email: ${data.email}
        Phone Number: ${data.phoneNumber}
        Message: ${data.message}
      `
    };

    // Send the email
    const info = await transporter.sendMail(message);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
