import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const registAppointment = async (
  name,
  phone,
  enterprise,
  address,
  whereFrom,
  selected
) => {
  try {
    const docRef = await addDoc(collection(db, "appointment"), {
      date: serverTimestamp(),
      name: name,
      enterprise: enterprise,
      phone: phone,
      address: address,
      fromUrl: whereFrom,
      selectedAccount: selected,
      state: 1,
      enterpriseId: localStorage.getItem("id"),
    });
  } catch (error) {
    console.log(error);
  }
};

export default registAppointment;
