import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
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
  const { isFirst, setIsFirst, isRegistedSite } = useContext(DataContext);
  const [getTag, setGetTag] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [googleDialog, setGoogleDialog] = useState(false);
  const [mailSetting, setMailSetting] = useState(false);

  const handleClickGoTag = () => {
    console.log("商談タグ発行ボタンクリック！");
    setGetTag(true);
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
        <Grid item xs={12} sm={7}></Grid>
        <Grid item xs={12} sm={5} sx={{ textAlign: "right", pr: 2 }}>
          <Button variant="contained">変更内容を保存</Button>
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
