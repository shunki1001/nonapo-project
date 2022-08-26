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
      {accountList.length === 0 ? (
        <Select
          value="none"
          sx={{
            "& .MuiSelect-select": {
              backgroundColor: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
            },
          }}
        ></Select>
      ) : (
        <Select
          labelId="site-select-label"
          id="site-select"
          value={account}
          label="アカウント名"
          sx={{
            "& .MuiSelect-select": {
              backgroundColor: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
            },
          }}
          onChange={(e) => {
            setAccount(e.target.value);
            const targetuser = accountList.filter(
              (item) => item.username === e.target.value
            );
            localStorage.setItem("userId", targetuser[0].id);
          }}
        >
          {accountList.map((item) => (
            <MenuItem value={item.username} key={item.id}>
              {item.username}
            </MenuItem>
          ))}
        </Select>
      )}
    </>
  );
};

export default AccountSelect;
