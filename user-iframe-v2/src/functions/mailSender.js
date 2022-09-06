import axios from "axios";

// export const serverDomain =
//   "http://127.0.0.1:5001/non-apo/us-central1/functions";
export const serverDomain =
  "https://us-central1-non-apo.cloudfunctions.net/functions";

const mailSender = async (
  name,
  phone,
  email,
  enterprise,
  address,
  whereFrom,
  account
) => {
  const userMailApi = `${serverDomain}/mailer/user`;
  const onlineApi = `${serverDomain}/mailer/online`;
  const offlineApi = `${serverDomain}/mailer/offline`;

  try {
    await axios.post(userMailApi, {
      name: name,
      phone: phone,
      email: email,
      enterprise: enterprise,
      whereFrom: whereFrom,
      accountName: account.username,
      mtgUrl: account.url,
      accountEmail: account.email,
    });
  } catch (error) {
    console.log(error);
  }

  if (account.online) {
    await axios.post(onlineApi, {
      email: email,
      enterprise: account.company,
      account: account.username,
      mtgUrl: account.url,
      phone: account.phone,
    });
  } else {
    await axios.post(offlineApi, {
      email: email,
      enterprise: enterprise,
      account: name,
      contents: account.mailContent,
    });
  }
};
export default mailSender;
