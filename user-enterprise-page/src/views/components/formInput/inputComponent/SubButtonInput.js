import { Box, Divider, Radio, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";
import SubButttonCard from "./SubButttonCard";

const SubButtonInput = () => {
  const { isOneSubButton, setIsOneSubButton } = useContext(DataContext);
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Radio
          checked={isOneSubButton === true}
          onChange={(e) => setIsOneSubButton(true)}
          name="a-radio"
        />
        <Typography sx={{ display: "inline-block" }}>
          サブボタンをつける（任意）
        </Typography>
        <Radio
          checked={isOneSubButton === false}
          onChange={(e) => setIsOneSubButton(false)}
          name="b-radio"
        />
        <Typography sx={{ display: "inline-block" }}>
          サブボタンを複数つける（任意）
        </Typography>
      </Box>
      <Box>
        {isOneSubButton ? (
          <SubButttonCard />
        ) : (
          <>
            <Typography>ボタンタイトル</Typography>
            <TextField />
            <Divider sx={{ my: 2 }} />
            <SubButttonCard />
            <SubButttonCard />
            <SubButttonCard />
            <SubButttonCard />
          </>
        )}
      </Box>
    </>
  );
};

export default SubButtonInput;
