import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const PhoneInput = () => {
  const { phone, setPhone,error,setError } = useContext(DataContext);
  const handleBlur = (e)=>{
    if(!(e.target.value)){
      setError({...error, phone:true,firstRender:false})
    }else {
      setError({...error, phone:false,firstRender:false})
    }
  }
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">携帯の電話番号</Typography>
      <TextField
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="090-0000-0000"
        sx={{ width: "60%" }}
        error={error.phone}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default PhoneInput;
