import { Avatar, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const ProfileInput = () => {
  const { avatar, setAvatar } = useContext(DataContext);

  return (
    <Grid container sx={{ my: 4 }}>
      <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
        <Avatar
          alt="Profile image"
          src={avatar}
          sx={{ width: "100%", height: "100%", margin: "0 auto" }}
        />
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={7} sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="h6">プロフィール画像</Typography>
        <Button variant="outlined" component="label">
          ファイルを選択
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              let img = URL.createObjectURL(e.target.files[0]);
              setAvatar(img);
            }}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileInput;
