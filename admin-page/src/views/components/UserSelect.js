import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const UserSelect = () => {
  const [user, setUser] = useState("testuser@gmail.com");
  return (
    <>
      <Select value={user} onChange={(e) => setUser(e.target.value)}>
        <MenuItem value="testuser@gmail.com">testuser@gmail.com</MenuItem>
      </Select>
    </>
  );
};

export default UserSelect;
