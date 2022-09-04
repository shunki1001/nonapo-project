const express = require("express");
const { google } = require("googleapis");

const app = express();

const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
const GOOGLE_PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqLh+Ong+QofO0\nlecxHIyMI+sYTuLji15LBfETBgojXmZ6tqhbPAGX7eiORgeko7v/j6gHGoV1vaH7\nquOpfH+tmoruK9ez1n6B8wpgUthh+PZgB0sNhrlY8SGoqjdjypUHG/7ZCz6JHEgZ\nRVPR09bqWFQpCjv5GrPVMV6/mRFvKWnUCajfH1KyklSm2XJcUue/uN+zsya49sPo\nf0EOrZrly79c7Htsx5Luulm6gZTHrlQLVtKrIigLkd9iPkv4g9r1HHRsvfj6Px4m\nrNhYLIlGYuAqfByTeQtaYChOiy/CaD9+/ektLeD/V5MehCjDPviedPW4fTgjvmGZ\nu2FXGRtFAgMBAAECggEABDBAbJUtUuT5h49M8mN+fhCAP8fpQ6pxdq09wrcaVsaD\nBTArspsmeuPLHn1QwNeaz+5sN0iK0lwJeZU6Jzi+N7qfAr+nfnCgCni936MKWlbz\nUWe8jCettiexKWKPHHCm/FbPDe596of8qkqPhpGNL5Ve9OeglD/4/x1I9LRCvpaf\nEWJ80Pmi9ioKNDHQ5gi1BoVvToM+d2dKze0/iLUKaxrUO2hPRU9K8DuccBDtHYCR\nxY8C5iZJS/MipWyZAzbmrJAevhEVZlxMSNUff9BHc9l8aWwrZXFKRGi99E+SYfJE\nK6qrkXOndOPtbZYJcnzLiywz5rG07E+NtX9WZklFAQKBgQDX+btHJFNxAiSfSGnP\n4XVybKCNTYgiDpxtYNXKeMxIGO/FREDk0asWtApjC1ih0o4a8Zx5h4DskdWrKLxp\nA+Hsd53dtgXwZvbTVgnWeqwqPlIR8G1EP3tBk9W43C0+InRLUHTwwj90hvlNYODA\nERIRJHTgd9tekB1VBfEJ1u02QQKBgQDJt8cg5wE35oxwnCvZvChcNkuc17ejly/t\n56xn1R1LyzugOoxfmAGfsm0y4wAhtYhzzZTR5G8CTWLqBJ459XCXIDSUx5HeclGN\nxSUY42iuXcdwmiTvPnTd+sFKnhZqAPsTxpreDWpkIX4faPjKOD9PR0DTPso5HhuS\nC3NiguwMBQKBgFYkycoKdy2wCSNvIqVD7DCDm1ZBAndzFHmcEin8HJ71M02fd7LM\n3kzj6vCuad/Bt+SPUjY3EflKAcuPJ/dLESXcYB86pwvIRdLtkmb17w26Zcm5+Bss\npuD1Ml3VlEYgP/p6UOpm0CCOZYmzhnGVXXtw6x1NMTZ6jPiIsieWjm8BAoGBAJV3\nkJxnrzZtpaiXf8KRslJJhRONoCwejcw5uz0g49lSmTbryzHWH3XmrxVisKlJqvcr\n4Nb57euFzgJbM6b8n9XLbkrD6ekrShTDfO6JKvrw0CQ2g6Gm5M/Ky0jwBOm9Gk4X\n/o8E382cJ6k8jgTBUt/6iyU8RHm4PnOj+naHTkLFAoGAODPVVAwxickskb9KXmzf\npbrEjBiADFnd1IiQC9oPwPZqEZl+c2iDiCleoWXCRFiidVKDUGwbO6u9Iq4LhTpX\nsWW1Edp6JZFvzBJr2zeBJvQP84UVfTIqi721u436WQmC/sm+f9PWEXWubHiZTdE7\nmB1k45Mf3U7+VAV5Rq8TOgk=\n-----END PRIVATE KEY-----\n";
const GOOGLE_CLIENT_EMAIL =
  "test-nagoya@test-calendar-361111.iam.gserviceaccount.com";
const GOOGLE_PROJECT_NUMBER = "304748029086";
const GOOGLE_CALENDAR_ID = "fateveriki@gmail.com";

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

app.get("/", (req, res) => {
  calendar.events.list(
    {
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    },
    (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          res.send(JSON.stringify({ events: result.data.items }));
        } else {
          res.send(JSON.stringify({ message: "No upcoming events found." }));
        }
      }
    }
  );
});

app.listen(3000, () => console.log(`App listening on port 3000!`));

// This code is contributed by Yashi Shukla
