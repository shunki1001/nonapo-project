import { Box, IconButton, Radio, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const SiteRadio = () => {
  const { userSiteList, setUserSiteList, userSite, setUserSite } =
    useContext(DataContext);
  const handleDelete = (item) => {
    setUserSiteList(userSiteList.filter((eachItem) => eachItem !== item));
  };
  return (
    <>
      {userSiteList.map((item, index) => {
        return (
          <Box
            width="100%"
            key={item}
            sx={{ display: "flex", maxWidth: "600px" }}>
            <Radio
              checked={userSite === item}
              onChange={(e) => setUserSite(e.target.name)}
              name={item}
            />
            <Typography
              sx={{
                display: "inline-block",
                flexGrow: 1,
                p: 1,
              }}>
              {item}
            </Typography>
            <IconButton onClick={() => handleDelete(item)}>
              <HighlightOffIcon />
            </IconButton>
          </Box>
        );
      })}
    </>
  );
};

export default SiteRadio;
