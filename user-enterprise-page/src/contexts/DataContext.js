import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import defaultAvatar from "../img/defaultAvatar.JPG";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  // ログイン認証関係
  const signin = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  const signout = () => {
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  };

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(localStorage.getItem("isAuth"));
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else if (!isAuth) {
      navigate("/signin");
    }
    // eslint-disable-next-line
  }, [isAuth]);

  // アカウント情報関係
  const [enterprise, setEnterprise] = useState("テスト株式会社　営業部");
  const [userSiteList, setUserSiteList] = useState([
    "https://www.apple.com/jp/",
    "https://www.google.com/",
    "https://www.microsoft.com/ja-jp/",
  ]);
  const [userSite, setUserSite] = useState("https://www.apple.com/jp/");
  const [account, setAccount] = useState("ユーザー１");
  const [accountList, setAccountList] = useState([
    "ユーザー１",
    "ユーザー２",
    "ユーザー３",
  ]);
  const [isFirst, setIsFirst] = useState(true);
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [thumbnail, setThumbnail] = useState(null);
  const [email, setEmail] = useState("test@gmail.com");
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
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("17:00");
  const [company, setCompany] = useState("テスト株式会社");
  const [phone, setPhone] = useState("000-0000-0000");
  const [url, setUrl] = useState("https://google.com");
  const [mainButton, setMainButton] = useState("アポなし商談");
  const [isOneSubButton, setIsOneSubButton] = useState(true);

  // システム側で制御するもの
  const [InviteUrl, setInviteUrl] = useState(
    "https://non-appoint.com/Is/093mtg-url/"
  );

  const value = {
    isAuth,
    signin,
    signout,
    userSite,
    setUserSite,
    userSiteList,
    enterprise,
    account,
    setAccount,
    accountList,
    isFirst,
    setIsFirst,
    avatar,
    setAvatar,
    thumbnail,
    setThumbnail,
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
    InviteUrl,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContextProvider;
