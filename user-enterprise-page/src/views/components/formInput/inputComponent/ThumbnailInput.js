import { Avatar, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const ThumbnailInput = () => {
  const { setThumbnail, thumbnailLink, setThumbnailLink } =
    useContext(DataContext);

  return (
    <Grid container sx={{ my: 4 }}>
      {/* <img src={} alt="thumbnail" /> */}
      <Grid item xs={12} xl={5}>
        <Avatar
          variant="rounded"
          sx={{ width: "206px", height: "120px" }}
          src={thumbnailLink}
        />
      </Grid>
      <Grid item xs={12} xl={7} sx={{ mt: 2 }}>
        <Typography variant="h6">サムネイル画像</Typography>
        <Button
          variant="outlined"
          component="label"
          sx={{ py: 1, fontSize: "12px", mt: 1.5 }}
        >
          ファイルを選択
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              let img = URL.createObjectURL(e.target.files[0]);
              setThumbnailLink(img);
              setThumbnail(e.target.files[0]);
            }}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ThumbnailInput;
