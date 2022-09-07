import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

const ShowTagCode = (props) => {
  const { showTag, setShowTag } = props;
  const { domain } = useContext(DataContext);

  const tag = `<script type="text/javascript">const createIframe = () => {let modal = document.createElement("div");modal.style.position = "fixed";modal.style.bottom = "0";modal.style.right = "0";let obj = document.createElement("iframe");obj.setAttribute("frameBorder", "0");obj.setAttribute("scrolling", "no");obj.style.width = "350px";obj.style.height = "400px";obj.src = "https://mtg-non-apo.web.app/iframe/${domain}";modal.appendChild(obj);document.body.appendChild(modal);};setTimeout(() => {createIframe();}, 6000);</script>`;

  const handleClickDialog = () => {
    navigator.clipboard.writeText(tag);
    setShowTag(false);
  };
  return (
    <Dialog
      open={showTag}
      maxWidth="md"
      fullWidth
      onClose={() => setShowTag(false)}
    >
      <DialogContent sx={{ mx: 2 }}>
        <Box sx={{ textAlign: "center", "& p": { marginTop: "1em" } }}>
          <Typography variant="h5">商談タグを発行完了</Typography>
          <Typography>HPのbodyタグの内側に設置ください。</Typography>
        </Box>
        <Box sx={{ border: "1px solid #707070", m: 2, height: "10em" }}>
          <Typography>{tag}</Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", m: 3 }}>
        <Button
          onClick={() => setShowTag(false)}
          variant="contained"
          color="grey"
        >
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
