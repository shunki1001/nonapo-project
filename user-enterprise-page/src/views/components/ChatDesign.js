import { Box } from "@mui/material";
import React from "react";
import pic from "../../img/help-image.PNG";

const ChatDesign = () => {
  return (
    <Box
      sx={{
        verticalAlign: "middle",
        textAlign: "center",
        color: "red",
        "& img": { width: "100%" },
      }}
    >
      <img src={pic} alt="チャットデザインのイメージ" />
    </Box>
  );
};

export default ChatDesign;
