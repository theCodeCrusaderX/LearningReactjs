import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World');
});


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
  service: 'gmail',
  auth: {
    user: "trrk433@gmail.com",
    pass: process.env.PASSWORD,
  },
});


app.post('/send-email', async (req, res) => {
  const { name,email,message } = req.body;
    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "trrk433@gmail.com",
            subject:`New Message from ${name}`,
            text: message,
        });
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
});


app.listen(3000);

