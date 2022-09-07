import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../contexts/DataContext";

const InviteUrl = () => {
  const { accountIndex, domain } = useContext(DataContext);
  const [InviteUrl, setInviteUrl] = useState("");
  useEffect(() => {
    setInviteUrl(`https://mtg-non-apo.web.app/${domain}/ls/${accountIndex}`);
  }, [accountIndex, domain]);
  const handleCopyButton = () => {
    navigator.clipboard.writeText(InviteUrl);
  };
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" sx={{ "& span": { fontSize: "0.8em" } }}>
        シェア用のURL
        <span>(SNS経由でアポなし商談を行う際にお使いください)</span>
      </Typography>
      <TextField
        id="input-with-icon-textfield"
        fullWidth
        value={InviteUrl}
        disabled
        sx={{ boxShadow: "none" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleCopyButton}>
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
};

export default InviteUrl;
