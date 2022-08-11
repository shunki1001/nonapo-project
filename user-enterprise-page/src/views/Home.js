import { Box, Button, IconButton } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";

const drawerWidth = "240px";

const Home = () => {
  // hydrationエラー解消のため必要
  // eslint-disable-next-line
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // メディアクエリ
  const isWideScreen = useMediaQuery({
    query: "(min-width:768px)",
  });
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {isWideScreen ? (
        // PCデザイン
        <>
          <Menu variant="permanent" drawerWidth={drawerWidth} />
          <Box sx={{ ml: drawerWidth }}>ここにいろいろ入るよ</Box>
        </>
      ) : (
        // スマホデザイン
        <>
          <Button
            sx={{ position: "absolute" }}
            onClick={() => setMenuOpen(true)}
          >
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
        </>
      )}
    </>
  );
};

export default Home;
