import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";
import availableChecker from "./availableChecker";

const getInfo = async (domain, fromUrl, setFirstAccount, setOnline) => {
  let firstAccountId = "";
  try {
    const docRef = await getDocs(
      query(
        collection(db, "site"),
        where("domain", "==", domain),
        where("userSite", "==", fromUrl)
      )
    );
    let userIdList = [];
    let tempFirstId = "";
    docRef.forEach((element) => {
      userIdList.push(element.data().account);
      tempFirstId = element.data().isFirst;
    });
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 表示するアカウントを選択
    firstAccountId = userIdList[0].filter((item) => {
      return item === tempFirstId;
    })[0];
  } catch (error) {
    console.log(error);
  }

  let temp = {};
  try {
    const docRef2 = await getDoc(doc(db, "account", firstAccountId));
    temp = docRef2.data();
    temp.id = docRef2.id;
    // ボタンの取得
    let buttonTemp = [];
    if (docRef2.data().isOneSubButton === true) {
      const docRef3 = await getDocs(
        query(
          collection(db, "account", firstAccountId, "button"),
          where("isOnly", "==", true)
        )
      );
      docRef3.forEach((ele) => {
        buttonTemp.push(ele.data());
      });
    } else {
      const docRef4 = await getDocs(
        query(
          collection(db, "account", firstAccountId, "button"),
          where("isOnly", "==", false)
        )
      );
      docRef4.forEach((ele) => {
        buttonTemp.push(ele.data());
      });
    }
    temp.button = buttonTemp;
  } catch (error) {
    console.log(error);
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  setFirstAccount(temp);
  // オンライン、オフラインの判定
  if (temp.isGoogleCalendar) {
    try {
      const result = await axios.get(
        `https://us-central1-non-apo.cloudfunctions.net/functions/google?google=${temp.googleId}`
      );
      setOnline(result.isOnline);
    } catch (error) {
      console.log(error);
    }
  } else {
    availableChecker(temp, setOnline);
  }
};

export default getInfo;
