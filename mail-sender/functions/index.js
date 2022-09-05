const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.lolipop.jp",
    auth: {
        user: 'info@sukenojo.com',
        pass: 'G8sh-qBOfV7_W_SG',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});


app.post("/", (req, res) => {
    const {to, subject, content } = req.body;
    const mailData = {
        from: 'info@sukenojo.com',
        to: to,
        subject: subject,
        html: content,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});

// app.listen(3000, () => console.log(`App listening on port 3000!`));
exports.mailsender = functions.https.onRequest(app);

