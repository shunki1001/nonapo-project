import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const MainButtonInput = () => {
  const { mainButton, setMainButton } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">メインボタンタイトル（最大10文字）</Typography>
      <TextField
        value={mainButton}
        onChange={(e) => setMainButton(e.target.value)}
      />
    </Box>
  );
};

export default MainButtonInput;
