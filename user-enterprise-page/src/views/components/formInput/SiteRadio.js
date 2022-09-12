import { Box, IconButton, Radio, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CircleIcon from "@mui/icons-material/Circle";
import radioIcon from "../../../img/radioIcon.svg";

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
            sx={{ display: "flex", maxWidth: "600px" }}
          >
            <Radio
              checked={userSite === item}
              onChange={(e) => setUserSite(e.target.name)}
              name={item}
              icon={
                <img
                  src={radioIcon}
                  alt="checked"
                  style={{
                    width: "1em",
                    fontSize: "1.5rem",
                  }}
                />
              }
              checkedIcon={
                <>
                  <img
                    src={radioIcon}
                    alt="checked"
                    style={{
                      position: "absolute",
                      width: "1em",
                      fontSize: "1.5rem",
                    }}
                  />
                  <CircleIcon
                    fontSize="small"
                    sx={{
                      color: "#5E72E4",
                      position: "relative",
                    }}
                  />
                </>
              }
            />
            <Typography
              sx={{
                display: "inline-block",
                flexGrow: 1,
                p: 1,
                fontWeight: 700,
              }}
            >
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
