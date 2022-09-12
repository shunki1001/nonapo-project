import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const editData = async (newData, data) => {
  const { id } = newData;
  const doc_ref = await updateDoc(doc(db, "enterprise", id), data);
  return doc_ref;
};

export default editData;
