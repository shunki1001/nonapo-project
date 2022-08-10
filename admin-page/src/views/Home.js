import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Menu from "./components/Menu";

const drawerWidth = "240px";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* PCデザイン */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Menu variant="permanent" drawerWidth={drawerWidth} />
        <Box sx={{ ml: drawerWidth }}>ここにいろいろ入るよ</Box>
      </Box>
      {/* スマホデザイン */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Button sx={{ position: "absolute" }} onClick={() => setMenuOpen(true)}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Button>
        <Menu
          variant="temporary"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          drawerWidth={drawerWidth}
        />
        <Box></Box>
      </Box>
    </>
  );
};

export default Home;
