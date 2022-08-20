import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const MailInput = () => {
  const { email, setEmail } = useContext(DataContext);
  return (
    <Box>
      <Typography variant="h6">
        商談希望があった場合の通知用メールアドレス
      </Typography>
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
    </Box>
  );
};

export default MailInput;
