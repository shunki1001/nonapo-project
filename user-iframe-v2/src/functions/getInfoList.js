import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const getInfoList = async (domain, fromUrl, setAccountList) => {
  let userIdList = [];
  let tempList = [];
  try {
    const docRef = await getDocs(
      query(
        collection(db, "site"),
        where("domain", "==", domain),
        where("userSite", "==", fromUrl)
      )
    );
    docRef.forEach((element) => {
      userIdList.push(element.data().account);
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
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
