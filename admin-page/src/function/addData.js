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
  });

  return docRef;
};

export default addData;
