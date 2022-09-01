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
    username,
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
    avatar,
    thumbnail,
    onlySubButton,
    multiSubButton,
    subButtonTitle,
    setErrorSnackOpen,
    setAvatar,
    setThumbnail,
  } = useContext(DataContext);
  const [getTag, setGetTag] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [googleDialog, setGoogleDialog] = useState(false);
  const [mailSetting, setMailSetting] = useState(false);

  const handleClickGoTag = () => {
    console.log("商談タグ発行ボタンクリック！");
    setGetTag(true);
  };

  const handleAccountUpdate = () => {
    registAccount(
      account,
      username,
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
      subButtonList,
      subButtonTitle,
      setErrorSnackOpen,
      setAvatar,
      setThumbnail
    );
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
        <Grid item xs={12} sm={9}></Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "right", pr: 2 }}>
          <Button
            variant="contained"
            onClick={handleAccountUpdate}
            disabled={account === ""}
          >
            変更内容を保存
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
          accountList={accountList}
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
