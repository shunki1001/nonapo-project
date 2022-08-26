import { Box, TextField, Typography } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";
import { db } from "../../../../firebase";

const NameInput = () => {
  const { account, setAccount } = useContext(DataContext);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6">お名前（商談対応者）</Typography>
      <TextField
        value={account}
        onChange={async (e) => {
          setAccount(e.target.value);
          await updateDoc(doc(db, "account", localStorage.getItem("userId")), {
            username: e.target.value,
          });
        }}
      />
    </Box>
  );
};

export default NameInput;
