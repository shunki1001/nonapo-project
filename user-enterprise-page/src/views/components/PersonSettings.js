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
import ScheduleInput from "./formInput/inputComponent/ScheduleInput";
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
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <AccountSelect />
        <FormControlLabel
          sx={{ ml: 2 }}
          control={
            <Switch
              checked={isFirst}
              onChange={(e) => setIsFirst(e.target.checked)}
            />
          }
          label="このユーザーを先頭に配置する"
        />
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button variant="contained" onClick={handleClickGoTag} sx={{ px: 10 }}>
          商談タグを発行
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ overflow: "auto", height: "70vh" }}>
        <Button
          variant="contained"
          onClick={handleAccountUpdate}
          disabled={account === ""}
          sx={{
            px: 6,
            py: 2,
            position: "sticky",
            top: "90%",
            left: "80%",
            zIndex: "100",
          }}
        >
          変更内容を保存
        </Button>
        <Grid container sx={{ mt: -10 }}>
          <Grid item md={4} xs={12}>
            <LeftColumn />
          </Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={7} xs={12}>
            <RightColumn />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} xl={7}>
            <ScheduleInput
              setGoogleDialog={setGoogleDialog}
              setMailSetting={setMailSetting}
            />
          </Grid>
          <Grid item xs={12} xl={5}></Grid>
          <Grid item xs={12} md={4.5}>
            <CompanyInput />
          </Grid>
          <Grid item xs={12} md={0.5}></Grid>
          <Grid item xs={12} md={7}>
            <PhoneInput />
          </Grid>
          <Grid item xs={12} md={12}>
            <UrlInput />
          </Grid>
          <Grid item xs={12} md={12}>
            <MainButtonInput />
          </Grid>
          <Grid item xs={12} md={12}>
            <SubButtonInput />
          </Grid>
          {/* <Grid item xs={12} md={9}></Grid>
          <Grid item xs={12} md={3} sx={{ textAlign: "right", pr: 2, my: 2 }}>
            
          </Grid> */}
        </Grid>
        {/* <Box
          sx={{
            width: "100%",
            
          }}
        > */}

        {/* </Box> */}
        <Divider sx={{ my: 2 }} />
        <InviteUrl />
        <Box sx={{ width: "100%", height: "10vh" }}></Box>
      </Box>

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
