// const functions = require("firebase-functions");

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const getUrlTitle = require("get-url-title");

const { google } = require("googleapis");

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
// const admin = require("firebase-admin");
// admin.initializeApp();

const app = express();
app.use(
  cors({
    origin: "https://mtg-non-apo.web.app",
  })
);

const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
const GOOGLE_PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqLh+Ong+QofO0\nlecxHIyMI+sYTuLji15LBfETBgojXmZ6tqhbPAGX7eiORgeko7v/j6gHGoV1vaH7\nquOpfH+tmoruK9ez1n6B8wpgUthh+PZgB0sNhrlY8SGoqjdjypUHG/7ZCz6JHEgZ\nRVPR09bqWFQpCjv5GrPVMV6/mRFvKWnUCajfH1KyklSm2XJcUue/uN+zsya49sPo\nf0EOrZrly79c7Htsx5Luulm6gZTHrlQLVtKrIigLkd9iPkv4g9r1HHRsvfj6Px4m\nrNhYLIlGYuAqfByTeQtaYChOiy/CaD9+/ektLeD/V5MehCjDPviedPW4fTgjvmGZ\nu2FXGRtFAgMBAAECggEABDBAbJUtUuT5h49M8mN+fhCAP8fpQ6pxdq09wrcaVsaD\nBTArspsmeuPLHn1QwNeaz+5sN0iK0lwJeZU6Jzi+N7qfAr+nfnCgCni936MKWlbz\nUWe8jCettiexKWKPHHCm/FbPDe596of8qkqPhpGNL5Ve9OeglD/4/x1I9LRCvpaf\nEWJ80Pmi9ioKNDHQ5gi1BoVvToM+d2dKze0/iLUKaxrUO2hPRU9K8DuccBDtHYCR\nxY8C5iZJS/MipWyZAzbmrJAevhEVZlxMSNUff9BHc9l8aWwrZXFKRGi99E+SYfJE\nK6qrkXOndOPtbZYJcnzLiywz5rG07E+NtX9WZklFAQKBgQDX+btHJFNxAiSfSGnP\n4XVybKCNTYgiDpxtYNXKeMxIGO/FREDk0asWtApjC1ih0o4a8Zx5h4DskdWrKLxp\nA+Hsd53dtgXwZvbTVgnWeqwqPlIR8G1EP3tBk9W43C0+InRLUHTwwj90hvlNYODA\nERIRJHTgd9tekB1VBfEJ1u02QQKBgQDJt8cg5wE35oxwnCvZvChcNkuc17ejly/t\n56xn1R1LyzugOoxfmAGfsm0y4wAhtYhzzZTR5G8CTWLqBJ459XCXIDSUx5HeclGN\nxSUY42iuXcdwmiTvPnTd+sFKnhZqAPsTxpreDWpkIX4faPjKOD9PR0DTPso5HhuS\nC3NiguwMBQKBgFYkycoKdy2wCSNvIqVD7DCDm1ZBAndzFHmcEin8HJ71M02fd7LM\n3kzj6vCuad/Bt+SPUjY3EflKAcuPJ/dLESXcYB86pwvIRdLtkmb17w26Zcm5+Bss\npuD1Ml3VlEYgP/p6UOpm0CCOZYmzhnGVXXtw6x1NMTZ6jPiIsieWjm8BAoGBAJV3\nkJxnrzZtpaiXf8KRslJJhRONoCwejcw5uz0g49lSmTbryzHWH3XmrxVisKlJqvcr\n4Nb57euFzgJbM6b8n9XLbkrD6ekrShTDfO6JKvrw0CQ2g6Gm5M/Ky0jwBOm9Gk4X\n/o8E382cJ6k8jgTBUt/6iyU8RHm4PnOj+naHTkLFAoGAODPVVAwxickskb9KXmzf\npbrEjBiADFnd1IiQC9oPwPZqEZl+c2iDiCleoWXCRFiidVKDUGwbO6u9Iq4LhTpX\nsWW1Edp6JZFvzBJr2zeBJvQP84UVfTIqi721u436WQmC/sm+f9PWEXWubHiZTdE7\nmB1k45Mf3U7+VAV5Rq8TOgk=\n-----END PRIVATE KEY-----\n";
const GOOGLE_CLIENT_EMAIL =
  "test-nagoya@test-calendar-361111.iam.gserviceaccount.com";
const GOOGLE_PROJECT_NUMBER = "304748029086";

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({
  version: "v3",
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
});

app.get("/get-title", async (req, res) => {
  const hpTitle = await getUrlTitle(req.query.url);
  if (hpTitle === undefined) {
    res.send(JSON.stringify({ error: error }));
  } else {
    res.send(JSON.stringify({ title: hpTitle }));
  }
});

app.get("/google", (req, res) => {
  calendar.events.list(
    {
      calendarId: req.query.google,
      timeMin: new Date().toISOString(),
      maxResults: 3,
      singleEvents: true,
      orderBy: "startTime",
    },
    (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          const nowTime = Date.now();
          const eventStartTime = new Date(result.data.items[0].start.dateTime);
          const eventEndTime = new Date(result.data.items[0].end.dateTime);
          if (nowTime < eventStartTime) {
            res.send(
              JSON.stringify({
                isOnline: true,
                message: "Next event has not yet started ",
              })
            );
          } else if (nowTime > eventStartTime) {
            if (nowTime < eventEndTime) {
              res.send(
                JSON.stringify({
                  isOneline: false,
                  message: "event is going now ",
                })
              );
            } else {
              res.send(
                JSON.stringify({ isOneline: false, message: "anyway offline" })
              );
            }
          } else {
            res.send(
              JSON.stringify({ isOneline: false, message: "in switching time" })
            );
          }
          // res.send("Hello " + req.query.name);
        } else {
          res.send(
            JSON.stringify({ isOneline: false, message: "cacth error" })
          );
        }
      }
    }
  );
});

// app.listen(3000, () => console.log(`App listening on port 3000!`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userMail = "info@sukenojo.com";
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.lolipop.jp",
  auth: {
    user: userMail,
    pass: "G8sh-qBOfV7_W_SG",
  },
  secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

// const userMail = "info@non-appoint.com";
// const transporter = nodemailer.createTransport({
//   port: 465,
//   host: "sv7077.xserver.jp",
//   auth: {
//     user: userMail,
//     pass: "3WdeJTtr",
//   },
//   secure: true, // upgrades later with STARTTLS -- change this based on the PORT
// });

app.post("/mailer/user", async (req, res) => {
  const {
    name,
    phone,
    email,
    enterprise,
    address,
    whereFrom,
    accountName,
    mtgUrl,
    accountEmail,
  } = req.body;
  const hpTitle = await getUrlTitle(whereFrom);
  const mailData = {
    from: userMail,
    to: accountEmail,
    subject: `ノンアポ経由で商談依頼_${hpTitle}`,
    html: `
      <div>
        <p>
          遷移元サイト：${whereFrom} | ${hpTitle}
        </p>
        <br />
        <p>お名前：${name}</p>
        <p>会社名：${enterprise}</p>
        <p>電話番号：${phone}</p>
        <p>商談担当者：${accountName}</p>
        <p>メール：${email}</p>
        <br />
        <br />
        <p>アポ無し商談フォームから商談希望のお問い合わせがありました。</p>
        <br />
        <p>速やかにMTGルームにアクセスしてください</p>
        <br />
        <a href=${mtgUrl}>${mtgUrl}</a>
      </div>
    `,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      res.status(400).send({ error: error });
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});

app.post("/mailer/online", (req, res) => {
  const { email, enterprise, account, mtgUrl, phone } = req.body;
  const mailData = {
    from: userMail,
    to: email,
    subject: "アポ無し商談依頼ありがとうございます。",
    html: `
      <div>
        <p>アポ無し商談依頼、誠にありがとうございます。</p>
        <br />
        <p>いつもお世話になっております。</p>
        <p>
          ${enterprise}の${account}でございます。
        </p>
        <br />
        <p>こちらMTG URLになります。</p>
        <br />
        <a href=${mtgUrl}>${mtgUrl}</a>
        <p>
          （登録一切不要、アクセスお願いします）速やかにアクセスお願い致します。
        </p>
        <br />
        <p>緊急連絡先：${phone}</p>
        <br />
        <p>ご返信お待ちしております。</p>
      </div>
    `,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});

app.post("/mailer/offline", (req, res) => {
  const { email, account, enterprise, contents } = req.body;
  const mailData = {
    from: userMail,
    to: email,
    subject: "不在_アポ無し商談依頼ありがとうございます。",
    html: `
      <div>
        <p>
          ${enterprise} ${account}様
        </p>
        <p>${contents}</p>
      </div>
    `,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});

// app.listen(3000, () => console.log(`App listening on port 3000!`));
exports.functions = functions.https.onRequest(app);
