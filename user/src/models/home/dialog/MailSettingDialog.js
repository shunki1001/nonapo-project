import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../contexts/DataContext";

const MailSettingDialog = (props) => {
  const { mailSetting, setMailSetting } = props;
  const { mailSubject, setMailSubject, mailContent, setMailContent, username } =
    useContext(DataContext);

  useEffect(() => {
    setMailSubject(`商談依頼ありがとうございます。`);
    setMailContent(`この度は、リード獲得自動化Saas「リードダイナミクス」にノンアポ商談依頼誠にありがとうございます。
    
いつも大変お世話になっております。
    
現在、別件のオンラインMTGに対応中でして、改めてオンラインMTGのお時間頂ければと思います。
    
下記日程でご都合いかがでしょうか。
    
日程調整URL
https://google.com/calendar.app
    
こちらMTG URLになります。
https://zoom.us/s/0000000（登録一切不要、お時間になりましたらアクセスお願いします）
    
当日は営業が対応致します。
    
緊急連絡先：090-0000-0000
    
ご返信お待ちしております。`);
  }, []);

  const handleClickDialog = () => {
    navigator.clipboard.writeText("メールの設定を完了する");
    setMailSetting(false);
  };
  return (
    <Dialog
      open={mailSetting}
      maxWidth="md"
      fullWidth
      onClose={() => setMailSetting(false)}
    >
      <DialogContent sx={{ mx: 2 }}>
        <Box sx={{ textAlign: "center", "& p": { marginTop: "1em" } }}>
          <Typography variant="h5">オフライン時のフォローメール設定</Typography>
          <Typography>
            ※商談可能な曜日/時間帯以外の場合に送るメール内容になります。
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2} sx={{ textAlign: "right", p: 1 }}>
            件名：
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              value={mailSubject}
              onChange={(e) => setMailSubject(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2} sx={{ textAlign: "right", p: 1 }}>
            本文：
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              value={mailContent}
              onChange={(e) => setMailContent(e.target.value)}
              multiline
              height="30vh"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", m: 3 }}>
        <Button onClick={() => setMailSetting(false)} variant="outlined">
          キャンセル
        </Button>
        <Button onClick={() => handleClickDialog()} variant="contained">
          メール設定完了
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MailSettingDialog;
