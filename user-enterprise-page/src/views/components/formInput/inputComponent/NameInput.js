import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const NameInput = () => {
  const { account, setAccount } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">お名前（商談対応者）</Typography>
      <TextField value={account} onChange={(e) => setAccount(e.target.value)} />
    </Box>
  );
};

export default NameInput;
