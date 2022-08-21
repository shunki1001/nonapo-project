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
import TagCard from "../TagCard";

const GetTagDialog = (props) => {
  const { getTag, setGetTag, setShowTag } = props;
  const { userSite } = useContext(DataContext);

  const handleClickDialog = () => {
    setGetTag(false);
    setShowTag(true);
  };
  return (
    <Dialog
      open={getTag}
      maxWidth="md"
      fullWidth
      onClose={() => setGetTag(false)}>
      <DialogContent sx={{ mx: 2 }}>
        <Box sx={{ textAlign: "center", "& p": { marginTop: "1em" } }}>
          <Typography variant="h5">商談タグを発行確認画面</Typography>
          <Typography>商談担当者の情報をご確認ください</Typography>
          <Typography sx={{ "& span": { color: "#4357C9" } }}>
            設置するサイト：<span>{userSite}</span>
          </Typography>
          <Typography>
            バツボタンで↑このサイトに不要な担当者を削除できます。
          </Typography>
        </Box>
        <TagCard />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", m: 3 }}>
        <Button
          onClick={() => setGetTag(false)}
          variant="contained"
          color="grey">
          キャンセル
        </Button>
        <Button onClick={() => handleClickDialog()} variant="contained">
          スクリプトタグを発行
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GetTagDialog;
