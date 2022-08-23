import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const editData = async (data) => {
  const { id, ...updateData } = data;
  console.log(updateData);
  const doc_ref = await updateDoc(doc(db, "enterprise", data.id), updateData);
  return doc_ref;
};

export default editData;
