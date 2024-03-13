const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

(async () => {
  // Step 1. Create test account for sending mail. Can be used only for testing
  let testAccount = await nodemailer.createTestAccount();

  // Step 2. Configure transport object
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // Step 3. Configure email address
  let email = {
    from: '"Dhiraj Kumar" Dhiraj@niit.com',
    to: ["John@xyz.com", "Peter@xyz.com"],
    subject: "Hello from Dhiraj",
    html: "Hello John, How are you doing these days?",
  };

  // Step 4. Send email
  let msg = await transporter.sendMail(email);

  console.log(`Message sent: ${msg.messageId}`);
  console.log(`Preview url is: ${nodemailer.getTestMessageUrl(msg)}`);
})();

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
