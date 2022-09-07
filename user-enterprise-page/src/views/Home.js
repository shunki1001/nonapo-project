import React from "react";

import HomeLayout from "../Layout/HomeLayout";
import { Box, Grid } from "@mui/material";
import PersonSettings from "./components/PersonSettings";
import HelpSidebar from "./components/HelpSidebar";

const Home = () => {
  return (
    <HomeLayout title="商談対応者設定">
      <Grid container sx={{ bgcolor: "transparent" }}>
        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              bgcolor: "#F0F2FA",
              borderRadius: "10px",
              border: "none",
              p: 3,
            }}
          >
            <PersonSettings />
          </Box>
        </Grid>
        <Grid item xs={12} sm={0.5} sx={{ bgcolor: "transparent" }}></Grid>
        <Grid item xs={12} sm={3.5}>
          <Box
            sx={{
              bgcolor: "#ffffff",
              borderRadius: "10px",
              border: "none",
              boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.29)",
              p: 3,
            }}
          >
            <HelpSidebar />
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Home;
