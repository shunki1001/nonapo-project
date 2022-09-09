import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const PhoneInput = () => {
  const { phone, setPhone } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">携帯の電話番号</Typography>
      <TextField
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="090-0000-0000"
        sx={{ width: "60%" }}
      />
    </Box>
  );
};

export default PhoneInput;
