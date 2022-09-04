import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

const getInfoList = async (domain, whereFrom, setAccountList, setWhereFrom) => {
  let tempUrl = "";
  try {
    const tempDoc = await getDocs(
      query(
        collection(db, "tempAppointment"),
        where("domain", "==", domain),
        orderBy("date"),
        limit(1)
      )
    );
    tempDoc.forEach((element) => {
      tempUrl = element.data().fromUrl;
      console.log(element.data());
    });
  } catch (error) {
    console.log(error);
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  setWhereFrom(tempUrl);
  await new Promise((resolve) => setTimeout(resolve, 100));
  let userIdList = [];
  let tempList = [];
  try {
    console.log(tempUrl);
    const docRef = await getDocs(
      query(
        collection(db, "site"),
        where("domain", "==", domain),
        where("userSite", "==", tempUrl)
      )
    );
    docRef.forEach((element) => {
      userIdList.push(element.data().account);
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(userIdList);
  } catch (error) {
    console.log(error);
  }
  userIdList[0].forEach(async (accountElement) => {
    let temp = {};
    try {
      const docRef2 = await getDoc(doc(db, "account", accountElement));
      temp = docRef2.data();
      temp.id = docRef2.id;
      // ボタンの取得
      let buttonTemp = [];
      if (docRef2.data().isOneSubButton === true) {
        const docRef3 = await getDocs(
          query(
            collection(db, "account", accountElement, "button"),
            where("isOnly", "==", true)
          )
        );
        docRef3.forEach((ele) => {
          buttonTemp.push(ele.data());
        });
      } else {
        const docRef4 = await getDocs(
          query(
            collection(db, "account", accountElement, "button"),
            where("isOnly", "==", false)
          )
        );
        docRef4.forEach((ele) => {
          buttonTemp.push(ele.data());
        });
      }
      temp.button = buttonTemp;
      tempList.push(temp);
    } catch (error) {
      console.log(error);
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  setAccountList(tempList);
};

export default getInfoList;
