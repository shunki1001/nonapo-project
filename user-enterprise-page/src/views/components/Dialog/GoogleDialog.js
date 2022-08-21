import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const googleAddress = "xxxxx-841@xxxxxx-000000.iam.gserviceaccount.com";

const GoogleDialog = (props) => {
  const { googleDialog, setGoogleDialog } = props;
  const { googleId, setGoogleId } = useContext(DataContext);

  const handleClickDialog = () => {
    setGoogleDialog(false);
  };

  const handleClickGoogle = () => {
    console.log("googleカレンダー連携API呼び出し");
  };
  return (
    <Dialog
      open={googleDialog}
      maxWidth="md"
      fullWidth
      onClose={() => setGoogleDialog(false)}>
      <DialogContent sx={{ mx: 2 }}>
        <Box sx={{ textAlign: "center", mb: 3, "& p": { marginTop: "1em" } }}>
          <Typography variant="h5">Googleカレンダー連携</Typography>
          <Typography>
            Googleカレンダーでスケジュール管理している方は、カレンダー連携して頂くと
            ノンアポへ自動反映され、予定が埋まっている所は商談受付不可にできます。
          </Typography>
          <Link href="https://www.google.com/search?q=Google%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC+%E7%89%B9%E5%AE%9A%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%A8%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8B">
            詳しいやり方はこちら
          </Link>
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
            sx={{ width: "50%" }}
          />
          <IconButton
            sx={{ color: "action.active", ml: 1, mt: 1 }}
            onClick={() => navigator.clipboard.writeText(googleAddress)}>
            <ContentCopyIcon />
          </IconButton>
        </Box>
        <Typography sx={{ "& span": { fontWeight: "bold" }, mt: 3 }}>
          <span>STEP２</span>
          ：連携したいカレンダーのカレンダーIDをノンアポの画面に登録。
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            value={googleId}
            variant="standard"
            label="カレンダーID"
            placeholder="yamadataro@gmail.com"
            sx={{ width: "50%" }}
            onChange={(e) => setGoogleId(e.target.value)}
          />
          <Button
            onClick={handleClickGoogle}
            variant="contained"
            sx={{
              bgcolor: "#F47474",
              "&:hover": { backgroundColor: "#f97979" },
            }}>
            連携する
          </Button>
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
