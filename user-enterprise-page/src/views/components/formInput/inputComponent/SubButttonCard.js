import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const SubButttonCard = (props) => {
  const { item, setItem } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={5} sx={{ my: 1 }}>
        <Typography>ボタンタイトル（最大10文字）</Typography>
        <TextField
          sx={{ width: "90%" }}
          value={item?.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={7} sx={{ my: 1 }}>
        <Typography>遷移URL</Typography>
        <TextField
          sx={{ width: "90%" }}
          value={item?.url}
          onChange={(e) => setItem({ ...item, url: e.target.value })}
        />
      </Grid>
    </Grid>
  );
};

export default SubButttonCard;
