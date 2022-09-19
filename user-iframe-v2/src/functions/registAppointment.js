import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";
import { serverDomain } from "./mailSender";

const registAppointment = async (data, whereFrom, selected) => {
  const result = await axios.get(
    `${serverDomain}/get-title?url=https://${whereFrom}`
  );
  try {
    const docRef = await addDoc(collection(db, "appointment"), {
      date: serverTimestamp(),
      name: data.name,
      email: data.email,
      enterprise: data.enterprise,
      phone: data.phone,
      address: data.address,
      fromUrl: whereFrom,
      title: result.data.title,
      selectedAccount: selected,
      state: 1,
      concierge: "",
      enterpriseId: localStorage.getItem("id"),
    });
  } catch (error) {
    console.log(error);
  }
};

export default registAppointment;
