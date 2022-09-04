import { Box, Checkbox } from "@mui/material";
import React from "react";

const DateChoiceCard = (props) => {
  const { dayOfWeekChoices, fontSize } = props;
  return (
    <Box sx={{ fontSize: props.fontSize }}>
      {/* {dayOfWeekChoice.map((item) => {
        return (
          <>
            <Checkbox
              checked={dayOfWeekChoices.indexOf(item) === 0}
              onChange={handleChange}
              value={item}
            />
            {item}
          </>
        );
      })} */}
      <>
        <Checkbox checked={dayOfWeekChoices.mon} name="mon" />月
        <Checkbox checked={dayOfWeekChoices.tue} name="tue" />火
        <Checkbox checked={dayOfWeekChoices.wed} name="wed" />水
        <Checkbox checked={dayOfWeekChoices.thu} name="thu" />木
        <Checkbox checked={dayOfWeekChoices.fri} name="fri" />金
        <Checkbox checked={dayOfWeekChoices.sat} name="sat" />土
        <Checkbox checked={dayOfWeekChoices.sun} name="sun" />日
      </>
    </Box>
  );
};

export default DateChoiceCard;
