import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const validation = async (data) => {
  let userList = [];
  const docRef = await getDocs(
    query(collection(db, "enterprise"), where("email", "==", data.email))
  );
  docRef.forEach((item) => {
    userList.push(item.data());
  });
  if (userList.lenth > 1) {
    return false;
  } else {
    return true;
  }
};

export default validation;
