import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { db } from "../../firebase";
import registAccount from "../../functions/registAccount";
import GetTagDialog from "./Dialog/GetTagDialog";
import GoogleDialog from "./Dialog/GoogleDialog";
import MailSettingDialog from "./Dialog/MailSettingDialog";
import RegistSiteDialog from "./Dialog/RegistSiteDialog";
import ShowTagCode from "./Dialog/ShowTagCode";
import CompanyInput from "./formInput/inputComponent/CompanyInput";
import MainButtonInput from "./formInput/inputComponent/MainButtonInput";
import PhoneInput from "./formInput/inputComponent/PhoneInput";
import SubButtonInput from "./formInput/inputComponent/SubButtonInput";
import UrlInput from "./formInput/inputComponent/UrlInput";
import InviteUrl from "./formInput/InviteUrl";
import LeftColumn from "./formInput/LeftColumn";
import RightColumn from "./formInput/RightColumn";
import AccountSelect from "./selector/AccountSelect";

const PersonSetteings = () => {
  const {
    subButtonList,
    setIsFirst,
    isRegistedSite,
    setAccountList,
    account,
    accountList,
    isFirst,
    isGoogleCalendar,
    email,
    dayOfWeekChoices,
    startTime,
    endTime,
    phone,
    company,
    url,
    mainButton,
    isOneSubButton,
    googleId,
    mailSubject,
    mailContent,
    numberOfAccount,
    setAccount,
    avatar,
    thumbnail,
    onlySubButton,
    multiSubButton,
    setErrorSnackOpen,
  } = useContext(DataContext);
  const [getTag, setGetTag] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [googleDialog, setGoogleDialog] = useState(false);
  const [mailSetting, setMailSetting] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [count, setCount] = useState(1);

  const handleClickGoTag = () => {
    console.log("商談タグ発行ボタンクリック！");
    setGetTag(true);
  };

  const handleAccountUpdate = () => {
    registAccount(
      account,
      isFirst,
      isGoogleCalendar,
      email,
      dayOfWeekChoices,
      startTime,
      endTime,
      phone,
      company,
      url,
      mainButton,
      isOneSubButton,
      googleId,
      mailSubject,
      mailContent,
      avatar,
      thumbnail,
      onlySubButton,
      multiSubButton,
      setErrorSnackOpen
    );
    setCreateMode(false);
  };
  const handleCancel = async () => {
    setCreateMode(false);
    setCount((prev) => prev - 1);
    // 一時的に作成したアカウントを削除
    // localStorage.removeItem("userId");
    try {
      await deleteDoc(doc(db, "account", localStorage.getItem("userId")));
    } catch (error) {
      console.log(error);
      setErrorSnackOpen({
        open: true,
        message: "一度、ログアウトしてください",
      });
    }
    setAccount(accountList[0]);
  };
  const handleCreateMode = async () => {
    setCreateMode(true);
    setCount((prev) => prev + 1);
    setAccount(`new user${count}`);
    // 一時的にアカウント作成
    try {
      const tempDoc = await addDoc(collection(db, "account"), {
        username: `new user${count}`,
        enterprise: localStorage.getItem("id"),
        isGoogleCalendar: false,
        isOneSubButton: true,
      });
      localStorage.setItem("userId", tempDoc.id);
      console.log(tempDoc.id);
    } catch (error) {
      setErrorSnackOpen({
        open: true,
        message: "アカウントを新規作成できません",
      });
    }
    for (let i = 0; i < 4; i++) {
      addDoc(
        collection(db, "account", localStorage.getItem("userId"), "button"),
        {
          isOnly: false,
          title: "",
          url: "",
        }
      );
    }
    addDoc(
      collection(db, "account", localStorage.getItem("userId"), "button"),
      {
        account: localStorage.getItem("userId"),
        isOnly: true,
        title: "",
        url: "",
      }
    );
    console.log(subButtonList);
  };
  const handleAccountCreate = () => {
    registAccount(
      account,
      isFirst,
      isGoogleCalendar,
      email,
      dayOfWeekChoices,
      startTime,
      endTime,
      phone,
      company,
      url,
      mainButton,
      isOneSubButton,
      googleId,
      mailSubject,
      mailContent,
      avatar,
      thumbnail,
      onlySubButton,
      multiSubButton,
      setErrorSnackOpen
    );
    localStorage.removeItem("userId");
    setCreateMode(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AccountSelect />
        <FormControlLabel
          control={
            <Switch
              checked={isFirst}
              onChange={(e) => setIsFirst(e.target.checked)}
            />
          }
          label="このユーザーを先頭に配置する"
        />
        <Button
          variant="contained"
          onClick={handleCreateMode}
          disabled={
            accountList.length + 1 > numberOfAccount || createMode === true
          }
        >
          担当者を新規作成
        </Button>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button variant="contained" onClick={handleClickGoTag}>
          商談タグを発行
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Grid container>
        <Grid item sm={4} xs={12}>
          <LeftColumn />
        </Grid>
        <Grid item sm={1} xs={12}></Grid>
        <Grid item sm={7} xs={12}>
          <RightColumn
            setGoogleDialog={setGoogleDialog}
            setMailSetting={setMailSetting}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <CompanyInput />
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={7}>
          <PhoneInput />
        </Grid>
        <Grid item xs={12} sm={12}>
          <UrlInput />
        </Grid>
        <Grid item xs={12} sm={12}>
          <MainButtonInput />
        </Grid>
        <Grid item xs={12} sm={12}>
          <SubButtonInput />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={6} sm={3} sx={{ textAlign: "right", pr: 2 }}>
          {createMode ? (
            <Button onClick={handleCancel} variant="outlined">
              キャンセル
            </Button>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={6} sm={3} sx={{ textAlign: "right", pr: 2 }}>
          <Button
            variant="contained"
            onClick={createMode ? handleAccountCreate : handleAccountUpdate}
            disabled={account === ""}
          >
            {createMode ? <>このユーザーを作成</> : <>変更内容を保存</>}
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <InviteUrl />
      {/* モーダルコンポーネント */}
      {!isRegistedSite && <RegistSiteDialog />}
      {getTag && (
        <GetTagDialog
          getTag={getTag}
          setGetTag={setGetTag}
          setShowTag={setShowTag}
        />
      )}
      {showTag && <ShowTagCode showTag={showTag} setShowTag={setShowTag} />}
      {googleDialog && (
        <GoogleDialog
          googleDialog={googleDialog}
          setGoogleDialog={setGoogleDialog}
        />
      )}
      {mailSetting && (
        <MailSettingDialog
          mailSetting={mailSetting}
          setMailSetting={setMailSetting}
        />
      )}
    </>
  );
};

export default PersonSetteings;
