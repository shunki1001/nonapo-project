import { Box, IconButton, Typography } from "@mui/material";
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
    console.log("copied!");
  };
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" sx={{ "& span": { fontSize: "0.8em" } }}>
        シェア用のURL
        <span>(SNS経由でアポなし商談を行う際にお使いください)</span>
      </Typography>
      <Box>
        <Typography sx={{ display: "inline-block" }}>{InviteUrl}</Typography>
        <IconButton onClick={handleCopyButton}>
          <ContentCopyIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InviteUrl;
