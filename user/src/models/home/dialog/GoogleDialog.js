import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const googleAddress =
  "test-nagoya@test-calendar-361111.iam.gserviceaccount.com";

const GoogleDialog = (props) => {
  const { googleDialog, setGoogleDialog } = props;
  const { googleId, setGoogleId } = useContext(DataContext);

  const handleClickDialog = () => {
    setGoogleDialog(false);
  };
  return (
    <Dialog
      open={googleDialog}
      maxWidth="md"
      fullWidth
      onClose={() => setGoogleDialog(false)}
    >
      <DialogContent sx={{ margin: "2em 10%" }}>
        <Box sx={{ textAlign: "center", mb: 3, "& p": { marginTop: "1em" } }}>
          <Typography variant="h5">Googleカレンダー連携</Typography>
          <Typography>
            Googleカレンダーでスケジュール管理している方は、カレンダー連携して頂くと
            ノンアポへ自動反映され、予定が埋まっている所は商談受付不可にできます。
          </Typography>
          <a
            href="https://www.google.com/search?q=Google%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC+%E7%89%B9%E5%AE%9A%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%A8%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8B"
            target="_blank"
          >
            詳しいやり方はこちら
          </a>
        </Box>
        <Typography sx={{ "& span": { fontWeight: "bold" } }}>
          <span>STEP１</span>
          ：Googleカレンダー設定にて、「特定ユーザーとの共有する」に以下のユーザーを追加
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            value={googleAddress}
            variant="standard"
            disabled
            sx={{
              width: "80%",
              boxShadow: "none",
              border: "1px solid #000000",
              borderRadius: "3px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "action.active", ml: 1, mt: 1 }}
                    onClick={() => navigator.clipboard.writeText(googleAddress)}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </Box>
        <Typography sx={{ "& span": { fontWeight: "bold" }, mt: 3 }}>
          <span>STEP２</span>
          ：連携したいカレンダーのカレンダーIDを以下に入力。
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            value={googleId}
            variant="outlined"
            placeholder="yamadataro@gmail.com"
            sx={{ width: "50%" }}
            onChange={(e) => setGoogleId(e.target.value)}
          />
        </Box>
        <Typography sx={{ "& span": { fontWeight: "bold" }, mt: 3 }}>
          <span>STEP３</span>
          ：STEP2で追加したユーザーの権限を「予定の変更」に設定してください。
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", m: 3 }}>
        <Button onClick={() => setGoogleDialog(false)} variant="outlined">
          キャンセル
        </Button>
        <Button onClick={() => handleClickDialog()} variant="contained">
          設定完了
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GoogleDialog;
