import { Avatar, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const ProfileInput = () => {
  const { setAvatar, avatarLink, setAvatarLink } = useContext(DataContext);

  return (
    <Grid container sx={{ my: 4 }}>
      <Grid item xs={12} xl={4} sx={{ textAlign: "center" }}>
        <Avatar
          alt="Profile image"
          src={avatarLink}
          sx={{
            width: "112px",
            height: "112px",
            margin: "0 auto",
          }}
        />
      </Grid>
      <Grid item xs={12} xl={8} sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="h6">プロフィール画像</Typography>
        <Button variant="outlined" component="label" sx={{ py: 1, mt: 1.5 }}>
          ファイルを選択
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              let img = URL.createObjectURL(e.target.files[0]);
              setAvatarLink(img);
              setAvatar(e.target.files[0]);
            }}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileInput;
