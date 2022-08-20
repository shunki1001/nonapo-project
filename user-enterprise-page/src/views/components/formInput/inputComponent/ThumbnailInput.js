import { Avatar, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const ThumbnailInput = () => {
  const { thumbnail, setThumbnail } = useContext(DataContext);
  return (
    <Grid container sx={{ my: 4 }}>
      {/* <img src={} alt="thumbnail" /> */}
      <Grid item xs={12} sm={5}>
        <Avatar
          variant="rounded"
          sx={{ width: "100%", height: "100%" }}
          src={thumbnail}
        />
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">サムネイル画像</Typography>
        <Button variant="outlined" component="label">
          ファイルを選択
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              let img = URL.createObjectURL(e.target.files[0]);
              setThumbnail(img);
            }}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ThumbnailInput;
