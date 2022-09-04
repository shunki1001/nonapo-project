import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React from "react";

const ShowTagCode = (props) => {
  const { showTag, setShowTag } = props;

  const handleClickDialog = () => {
    navigator.clipboard.writeText("タグの内容をコピーする");
    setShowTag(false);
  };
  return (
    <Dialog
      open={showTag}
      maxWidth="md"
      fullWidth
      onClose={() => setShowTag(false)}>
      <DialogContent sx={{ mx: 2 }}>
        <Box sx={{ textAlign: "center", "& p": { marginTop: "1em" } }}>
          <Typography variant="h5">商談タグを発行完了</Typography>
          <Typography>HPのbodyタグの内側に設置ください。</Typography>
        </Box>
        <Box sx={{ border: "1px solid #707070", m: 2, height: "10em" }}>
          <Typography>Todo: ここにhtml内に入れるタグを挿入する</Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", m: 3 }}>
        <Button
          onClick={() => setShowTag(false)}
          variant="contained"
          color="grey">
          閉じる
        </Button>
        <Button onClick={() => handleClickDialog()} variant="contained">
          タグをコピー
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShowTagCode;
