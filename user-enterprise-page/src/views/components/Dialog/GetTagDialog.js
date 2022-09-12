import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../contexts/DataContext";
import registSiteTag from "../../../functions/registSiteTag";
import TagCard from "../TagCard";

const GetTagDialog = (props) => {
  const { getTag, setGetTag, setShowTag, accountList } = props;
  const { userSite, setErrorSnackOpen, domain } = useContext(DataContext);

  const [issueAccountList, setIssueAccountList] = useState([]);

  useEffect(() => {
    setIssueAccountList(accountList);
  }, [accountList]);

  const handleClickDialog = () => {
    setGetTag(false);
    setShowTag(true);
    registSiteTag(issueAccountList, userSite, setErrorSnackOpen, domain);
  };
  return (
    <Dialog
      open={getTag}
      maxWidth="md"
      fullWidth
      onClose={() => setGetTag(false)}
    >
      <DialogContent sx={{ mx: 2 }}>
        <Box
          sx={{
            textAlign: "center",
            mb: 2,
            "& p": { marginTop: "1em", fontWeight: 700 },
          }}
        >
          <Typography variant="h5">商談タグを発行確認画面</Typography>
          <Typography>商談担当者の情報をご確認ください</Typography>
          <Typography sx={{ "& span": { color: "#4357C9" } }}>
            タグを設置するサイト：<span>{userSite}</span>
          </Typography>
          <Typography>
            バツボタンで↑このサイトに不要な担当者を削除できます。
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {issueAccountList.map((item) => {
            return (
              <TagCard
                key={item.id}
                avatar={item.avatar}
                username={item.username}
                isGoogleCalendar={item.isGoogleCalendar}
                startTime={item.startTime}
                endTime={item.endTime}
                dayOfWeekChoices={item.dayOfWeekChoices}
                id={item.id}
                issueAccountList={issueAccountList}
                setIssueAccountList={setIssueAccountList}
              />
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", m: 3 }}>
        <Button
          onClick={() => setGetTag(false)}
          variant="contained"
          color="grey"
          sx={{ py: 2, px: 6 }}
        >
          キャンセル
        </Button>
        <Button
          sx={{ py: 2, px: 6 }}
          onClick={() => handleClickDialog()}
          variant="contained"
        >
          スクリプトタグを発行
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GetTagDialog;
