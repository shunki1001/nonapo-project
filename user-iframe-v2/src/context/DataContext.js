import React from "react";
import { createContext, useState, useEffect } from "react";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [domain, setDomain] = useState("");
  const [accountList, setAccountList] = useState([]);
  const [fromUrl, setFromUrl] = useState("");
  const [firstId, setFirstId] = useState("");
  const [firstAccount, setFirstAccount] = useState({});

  let urlList = [];
  let tempFirstId = "";

  const getSiteInfo = async (domainName) => {
    try {
      const docRef = await getDocs(
        collection(db, "enterprise"),
        where("site", "==", fromUrl)
      );
      docRef.forEach((element) => {
        urlList = element.data().site;
        tempFirstId = element.data().isFirst;
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFirstId(tempFirstId);
    } catch (error) {
      console.log(error);
    }
    try {
      const docRef = await getDocs(
        collection(db, "site"),
        where("domain", "==", domainName)
      );
      let userIdList = [];
      docRef.forEach((element) => {
        userIdList.push(element.data().account);
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(userIdList);
      let tempList = [];

      userIdList[1].forEach(async (accountElement) => {
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
      await new Promise((resolve) => setTimeout(resolve, 500));
      setAccountList(tempList);
      console.log(tempList);
    } catch (error) {
      console.log(error);
    }
  };

  const urlInList = () => {
    const checked = urlList.indexOf(fromUrl);
    return checked !== -1;
  };

  useEffect(() => {
    console.log(domain);
    if (domain.length > 0) {
      getSiteInfo(domain);
      if (urlInList()) {
        console.log("登録されたURLからの遷移です");
      } else {
        console.log("登録されたURL以外からの遷移です");
      }
    }
  }, [domain]);

  useEffect(() => {
    setFirstAccount(
      accountList.filter((item) => {
        return item.id === firstId;
      })[0]
    );
  }, [firstId, accountList]);
  useEffect(() => {
    console.log(firstAccount);
  }, [firstAccount]);

  const value = { domain, setDomain, accountList, setFromUrl, firstAccount };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContextProvider;
