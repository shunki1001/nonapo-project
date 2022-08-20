import { MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

const AccountSelect = () => {
  const { account, setAccount, accountList } = useContext(DataContext);
  return (
    <>
      {/* <InputLabel id="site-select-label" sx={{ color: "white" }}>
        サイト名
      </InputLabel> */}
      <Select
        labelId="site-select-label"
        id="site-select"
        value={account}
        label="サイト名"
        sx={{
          "& .MuiSelect-select": {
            backgroundColor: "white",
            paddingTop: "5px",
            paddingBottom: "5px",
          },
        }}
        onChange={(e) => setAccount(e.target.value)}>
        {accountList.map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </>
  );
};

export default AccountSelect;
