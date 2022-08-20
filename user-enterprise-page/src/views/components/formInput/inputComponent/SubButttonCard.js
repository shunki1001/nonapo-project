import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const SubButttonCard = (props) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={5} sx={{ my: 1 }}>
        <Typography>ボタンタイトル（最大10文字）</Typography>
        <TextField sx={{ width: "20em" }} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Typography>遷移URL</Typography>
        <TextField sx={{ width: "90%" }} />
      </Grid>
    </Grid>
  );
};

export default SubButttonCard;
