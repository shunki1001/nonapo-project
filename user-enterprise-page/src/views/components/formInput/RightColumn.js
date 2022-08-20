import { Box } from "@mui/material";
import React from "react";
import MailInput from "./inputComponent/MailInput";
import ScheduleInput from "./inputComponent/ScheduleInput";
import ThumbnailInput from "./inputComponent/ThumbnailInput";

const RightColumn = () => {
  return (
    <Box>
      <ThumbnailInput />
      <MailInput />
      <ScheduleInput />
    </Box>
  );
};

export default RightColumn;
