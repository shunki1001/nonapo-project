import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";
import { serverDomain } from "./mailSender";

const registAppointment = async (
  name,
  phone,
  email,
  enterprise,
  address,
  whereFrom,
  selected
) => {
  const result = await axios.get(`${serverDomain}/get-title?url=${whereFrom}`);
  try {
    const docRef = await addDoc(collection(db, "appointment"), {
      date: serverTimestamp(),
      name: name,
      email: email,
      enterprise: enterprise,
      phone: phone,
      address: address,
      fromUrl: whereFrom,
      title: result.data.title,
      selectedAccount: selected,
      state: 1,
      enterpriseId: localStorage.getItem("id"),
    });
  } catch (error) {
    console.log(error);
  }
};

export default registAppointment;
