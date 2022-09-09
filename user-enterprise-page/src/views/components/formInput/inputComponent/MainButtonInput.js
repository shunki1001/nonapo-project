import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const MainButtonInput = () => {
  const { mainButton, setMainButton } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">メインボタンのタイトル（最大10文字）</Typography>
      <TextField
        sx={{ width: "20em" }}
        value={mainButton}
        onChange={(e) => setMainButton(e.target.value)}
        placeholder="アポなし商談"
      />
    </Box>
  );
};

export default MainButtonInput;
