import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const MailInput = () => {
  const { email, setEmail,error,setError } = useContext(DataContext);
  const handleBlur = (e)=>{
    if(!(e.target.value)){
      setError({...error, email:true,firstRender:false})
    }else {
      setError({...error, email:false,firstRender:false})
    }
  }
  return (
    <Box>
      <Typography variant="h6">
        商談希望があった場合の通知用メールアドレス
      </Typography>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@mail.com"
        sx={{ width: "60%" }}
        error={error.email}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default MailInput;
