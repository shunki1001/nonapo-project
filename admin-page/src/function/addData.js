import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const addData = async (data) => {
  const docRef = await addDoc(collection(db, "enterprise"), {
    enterprise: data.enterprise,
    email: data.email,
    password: data.password,
    address: data.address,
    subscriptionDuration: data.subscriptionDuration,
    numberOfSite: data.numberOfSite,
    subscriptionStartYear: data.subscriptionStartYear,
    subscriptionStartMonth: data.subscriptionStartMonth,
    numberOfAccount: data.numberOfAccount,
    subscriptionCost: data.subscriptionCost,
    status: data.isAgreement,
    isAgreement: data.isAgreement,
    site: [],
  });
  localStorage.setItem("tempId", docRef.id);
  // localStorage.setItem("company", docRef.data().enterprise);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  for (let i = 0; i < data.numberOfAccount; i++) {
    try {
      const docRef = await addDoc(collection(db, "account"), {
        username: `ユーザー${i + 1}`,
        email: "",
        phone: "",
        url: "",
        isGoogleCalendar: true,
        dayOfWeekChoices: {
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: false,
          sun: false,
        },
        startTime: "",
        endTime: "",
        company: localStorage.getItem("company"),
        isOneSubButton: true,
        mainButton: "",
        googleId: "",
        mailSubject: "",
        mailContent: "",
        enterprise: localStorage.getItem("tempId"),
      });
      const userId = docRef.id;
      if (i === 0) {
        try {
          await addDoc(collection(db, "account", userId, "button"), {
            isOnly: true,
            title: "",
            url: "",
          });
        } catch (error) {
          console.log("アカウントのボタンコレクションでエラー");
          console.log(error);
        }
      } else {
        try {
          await addDoc(collection(db, "account", userId, "button"), {
            isOnly: false,
            title: "",
            url: "",
          });
        } catch (error) {
          console.log("アカウントのボタンコレクションでエラー");
          console.log(error);
        }
      }
    } catch (error) {
      console.log("アカウントの登録でエラー");
      console.log(error);
    }
  }
  return docRef;
};

export default addData;
