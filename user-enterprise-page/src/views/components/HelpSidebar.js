import { Box, Icon, Link, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";
import ChatDesign from "./ChatDesign";

const HelpSidebar = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(132.56deg, #2D92FE 6.26%, #5977DD 110.9%)",
          color: "#ffffff",
          display: "flex",
          width: "5em",
          px: 1,
          py: 0.5,
          borderRadius: "1em",
          mb: 4,
        }}
      >
        <Icon sx={{ fontSize: "1.2em" }}>
          <HelpIcon sx={{ fontSize: "1em" }} />
        </Icon>
        <Typography sx={{ fontSize: "1rem" }}>Help</Typography>
      </Box>
      <Typography>
        任意項目以外は必須項目です。 商談担当者の表情がわかりやすいサムネイルを
        設置する事で商談化率向上に繋がります。
      </Typography>
      <Box height="1em"></Box>
      <Typography>
        サムネイルの参考デザインは
        <Link href="https://non-appoint.com/thumbnail.html">こちら</Link>
      </Typography>
      <Box height="2em"></Box>
      <Typography>LP掲載イメージ</Typography>
      <ChatDesign />
    </>
  );
};

export default HelpSidebar;
