import { Box } from "@mui/material";
import React from "react";
import MailInput from "./inputComponent/MailInput";
import ScheduleInput from "./inputComponent/ScheduleInput";
import ThumbnailInput from "./inputComponent/ThumbnailInput";

const RightColumn = (props) => {
  return (
    <Box>
      <ThumbnailInput />
      <MailInput />
      <ScheduleInput
        setGoogleDialog={props.setGoogleDialog}
        setMailSetting={props.setMailSetting}
      />
    </Box>
  );
};

export default RightColumn;
