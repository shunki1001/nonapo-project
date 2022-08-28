import { MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../contexts/DataContext";

const AccountSelect = () => {
  const { account, setAccount, accountList } = useContext(DataContext);

  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(() => {
    if (accountList.length > 0) {
      setRenderFlag(true);
    } else {
      setRenderFlag(false);
    }
  }, [accountList]);
  useEffect(() => {
    if (accountList.length > 0) {
      setAccount(accountList[0].username);
    } else {
      setAccount("仮置き");
    }
  }, [accountList]);

  return (
    <>
      {renderFlag == true && (
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
          onChange={(e, index) => {
            if (accountList.length > 0) {
              setAccount(e.target.value);
            }

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
