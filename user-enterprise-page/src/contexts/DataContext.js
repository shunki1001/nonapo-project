import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import firstSrc from "../img/defaultThumbnail.PNG";
import firstSrcAvatar from "../img/defaultAvatar.PNG";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  // アカウント情報関係
  const [enterprise, setEnterprise] = useState("テスト株式会社　営業部");
  const [userSiteList, setUserSiteList] = useState([]);
  const [userSite, setUserSite] = useState("");
  // firebase通信用のaccount（ユーザー名）
  const [account, setAccount] = useState("");
  // input上のアカウント（ユーザー名）
  const [username, setUsername] = useState("");
  // account情報のリスト
  const [accountList, setAccountList] = useState([]);

  const [isFirst, setIsFirst] = useState(true);
  const [isFirstId, setIsFirstId] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarLink, setAvatarLink] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailLink, setThumbnailLink] = useState("");
  const [email, setEmail] = useState("");
  const [isGoogleCalendar, setIsGoogleCalendar] = useState(false);
  const [dayOfWeekChoices, setDayOfWeekChoices] = useState({
    mon: true,
    tue: true,
    wed: false,
    thu: true,
    fri: true,
    sat: false,
    sun: false,
  });
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [mainButton, setMainButton] = useState("アポなし商談");
  const [isOneSubButton, setIsOneSubButton] = useState(true);
  const [subButtonList, setSubButtonList] = useState([]);
  const [onlySubButton, setOnlySubButton] = useState({});
  const [subButtonTitle, setSubButtonTitle] = useState("");
  const [multiSubButton, setMultiSubButton] = useState([]);
  const [googleId, setGoogleId] = useState("");
  const [mailSubject, setMailSubject] = useState("");
  const [mailContent, setMailContent] = useState("");
  const [accountIndex, setAccountIndex] = useState(1);
  const [domain, setDomain] = useState("");

  // validation
  const [error, setError] = useState({
    username: false,
    mail: false,
    phone: false,
    subButtonTitle: false,
    url: false,
    company: false,
    firstRender: false,
  });
  useEffect(() => {
    if (
      username.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      url.length > 0
    ) {
      setError({
        username: false,
        mail: false,
        phone: false,
        subButtonTitle: false,
        url: false,
        company: false,
        firstRender: false,
      });
    } else {
      setError({
        username: false,
        mail: false,
        phone: false,
        subButtonTitle: false,
        url: false,
        company: false,
        firstRender: true,
      });
    }
  }, [username, email, phone, url]);
  // useEffect(() => {
  //   if (username.length > 0) {
  //     setError({ ...error, username: false });
  //   } else {
  //     setError({ ...error, username: true });
  //   }
  // }, [username]);
  // useEffect(() => {
  //   if (email.length > 0) {
  //     setError({ ...error, mail: false });
  //   } else {
  //     setError({ ...error, mail: true });
  //   }
  // }, [email]);
  // useEffect(() => {
  //   if (url.length > 0) {
  //     setError({ ...error, url: false });
  //   } else {
  //     setError({ ...error, url: true });
  //   }
  // }, [url]);
  // useEffect(() => {
  //   if (phone.length > 0) {
  //     setError({ ...error, phone: false });
  //   } else {
  //     setError({ ...error, phone: true });
  //   }
  // }, [phone]);
  // useEffect(() => {
  //   if (company.length > 0) {
  //     setError({ ...error, company: false });
  //   } else {
  //     setError({ ...error, company: true });
  //   }
  // }, [company]);

  // マスターで制御するもの
  const [InviteUrl, setInviteUrl] = useState(
    "https://non-appoint.com/Is/093mtg-url/"
  );
  const [numberOfSite, setNumberOfSite] = useState(0);
  const [numberOfAccount, setNumberOfAccount] = useState(0);

  // 通信エラーのSnackbar
  const [errorSnackOpen, setErrorSnackOpen] = useState({
    open: false,
    message: "何らかのエラーが発生しました。",
  });

  // アポイントの未読通知
  const [newNotice, setNewNotice] = useState(false);
  const newAppointmentCheck = async () => {
    const q = query(
      collection(db, "appointment"),
      where("enterpriseId", "==", localStorage.getItem("id"))
    );
    const result = await getDocs(q);
    result.forEach((element) => {
      if (element.data().isChecked === undefined) {
        setNewNotice(true);
      }
    });
  };

  useEffect(() => {
    newAppointmentCheck();
  }, [enterprise]);
  const navigate = useNavigate();

  // ログイン認証関係
  const signin = async (email, password) => {
    const q = query(
      collection(db, "enterprise"),
      where("email", "==", email),
      where("password", "==", password)
    );
    try {
      const docSnap = await getDocs(q);
      if (!docSnap.empty) {
        docSnap.forEach((doc) => {
          setEnterprise(doc.data().enterprise);
          setUserSiteList(doc.data().site);
          setNumberOfSite(doc.data().numberOfSite);
          setNumberOfAccount(doc.data().numberOfAccount);
          setIsFirstId(doc.data().isFirst);
          setDomain(doc.data().domain);
          localStorage.setItem("id", doc.id);
          setIsAuth(true);
          localStorage.setItem("isAuth", true);
        });
      } else {
        throw new Error("ログイン情報が間違っています。");
      }
    } catch (error) {
      alert("ログイン情報が間違っているか、登録がありません");
      console.log(error);
    }
  };
  const signout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("id");
    localStorage.removeItem("userId");
  };
  const reloadFunc = async () => {
    if (localStorage.getItem("id") === null) {
      setIsAuth(false);
    } else {
      const docRef = doc(db, "enterprise", localStorage.getItem("id"));
      try {
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          signout();
        } else {
          setEnterprise(docSnap.data().enterprise);
          setUserSiteList(docSnap.data().site);
          setUserSite(docSnap.data().site[0]);
          setNumberOfSite(docSnap.data().numberOfSite);
          setNumberOfAccount(docSnap.data().numberOfAccount);
          setIsFirstId(docSnap.data().isFirst);
          setDomain(docSnap.data().domain);
          localStorage.setItem("id", docSnap.id);
          setIsAuth(true);
          localStorage.setItem("isAuth", true);
        }
      } catch (error) {
        setIsAuth(false);
      }
    }
  };

  useEffect(() => {
    reloadFunc();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "true") {
      navigate("/");
    } else {
      navigate("/signin");
    }
    // eslint-disable-next-line
  }, [isAuth]);

  // enterpriseごとにaccountを取得
  useEffect(() => {
    const q = query(
      collection(db, "account"),
      where(
        "enterprise",
        "==",
        localStorage.getItem("id"),
        orderBy("accountIndex")
      )
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const dataTemp = [];
      let temp = {};
      querySnapshot.forEach((doc) => {
        temp = doc.data();
        temp.id = doc.id;
        dataTemp.push(temp);
      });
      setAccountList(dataTemp);
    });
    return () => unsubscribe();
  }, [enterprise]);

  const getButtonList = async (id) => {
    const buttonSnapShot = await getDocs(
      collection(db, "account", id, "button")
    );
    const dataTemp = [];
    let temp = {};
    buttonSnapShot.forEach((doc) => {
      temp = doc.data();
      temp.id = doc.id;
      dataTemp.push(temp);
    });
    setSubButtonList(dataTemp);
  };
  useEffect(() => {
    if (account !== undefined && account !== null) {
      const targetAccount = accountList.filter(
        (item) => item.username === account
      );
      if (targetAccount[0]?.id !== undefined) {
        getButtonList(targetAccount[0].id);
        localStorage.setItem("userId", targetAccount[0].id);
        setIsFirst(isFirstId === targetAccount[0].id);
        setUsername(targetAccount[0]?.username);
        setEmail(targetAccount[0]?.email);
        setIsGoogleCalendar(targetAccount[0]?.isGoogleCalendar);
        setGoogleId(targetAccount[0]?.googleId);
        setStartTime(targetAccount[0]?.startTime);
        setEndTime(targetAccount[0]?.endTime);
        setCompany(targetAccount[0]?.company);
        setPhone(targetAccount[0]?.phone);
        setUrl(targetAccount[0]?.url);
        setMailContent(targetAccount[0]?.mailContent);
        setMailSubject(targetAccount[0]?.mailSubject);
        setMainButton(targetAccount[0]?.mainButton);
        if (targetAccount[0]?.avatar === undefined) {
          setAvatarLink(firstSrcAvatar);
        } else {
          setAvatarLink(targetAccount[0]?.avatar);
        }
        console.log();
        if (targetAccount[0]?.thumbnail === undefined) {
          setThumbnailLink(firstSrc);
        } else {
          setThumbnailLink(targetAccount[0]?.thumbnail);
        }
        setIsOneSubButton(targetAccount[0]?.isOneSubButton);
        setSubButtonTitle(targetAccount[0]?.subButtonTitle);
        setAccountIndex(targetAccount[0]?.accountIndex);
        if (targetAccount[0]?.dayOfWeekChoices !== undefined) {
          setDayOfWeekChoices(targetAccount[0]?.dayOfWeekChoices);
        }
      }
    } else {
    }
  }, [account]);

  useEffect(() => {
    if (isFirstId.length > 0) {
      try {
        updateDoc(doc(db, "enterprise", localStorage.getItem("id")), {
          isFirst: isFirstId,
        });
      } catch (error) {
        console.log("最初に配置アカウントの通信エラー");
        console.log(error);
      }
    }
  }, [isFirstId]);

  // useEffect(() => {
  //   const q = query(
  //     collection(db, "multibutton"),
  //     where("account", "==", localStorage.getItem("userId"))
  //   );
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const dataTemp2 = [];
  //     let temp2 = {};
  //     querySnapshot.forEach((doc) => {
  //       temp2 = doc.data();
  //       temp2.id = doc.id;
  //       dataTemp2.push(temp2);
  //     });
  //     setSubButtonList(dataTemp2);
  //     console.log(dataTemp2);
  //   });
  //   return () => unsubscribe();
  // }, [account]);

  const value = {
    signin,
    signout,
    userSite,
    setUserSite,
    userSiteList,
    setUserSiteList,
    enterprise,
    account,
    setAccount,
    accountList,
    setAccountList,
    username,
    setUsername,
    isFirst,
    setIsFirst,
    isFirstId,
    setIsFirstId,
    avatar,
    setAvatar,
    avatarLink,
    setAvatarLink,
    thumbnail,
    setThumbnail,
    thumbnailLink,
    setThumbnailLink,
    email,
    setEmail,
    isGoogleCalendar,
    setIsGoogleCalendar,
    dayOfWeekChoices,
    setDayOfWeekChoices,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    company,
    setCompany,
    phone,
    setPhone,
    url,
    setUrl,
    mainButton,
    setMainButton,
    isOneSubButton,
    setIsOneSubButton,
    subButtonList,
    setSubButtonList,
    subButtonTitle,
    setSubButtonTitle,
    onlySubButton,
    setOnlySubButton,
    multiSubButton,
    setMultiSubButton,
    InviteUrl,
    numberOfSite,
    googleId,
    setGoogleId,
    mailSubject,
    setMailSubject,
    mailContent,
    setMailContent,
    accountIndex,
    domain,
    numberOfAccount,
    errorSnackOpen,
    setErrorSnackOpen,
    newNotice,
    setNewNotice,
    error,
    setError,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContextProvider;
