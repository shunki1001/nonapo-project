import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import Menu from "../views/components/CustomMenu";
import UserSelect from "../views/components/selector/UserSelect";
import SiteSelect from "../views/components/selector/SiteSelect";

const drawerWidth = "240";

const HomeLayout = (props) => {
  // hydrationエラー解消のため必要
  // eslint-disable-next-line
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // メディアクエリ
  const isWideScreen = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {isWideScreen ? (
        // PCデザイン
        <>
          <Box
            sx={{
              top: 0,
              height: "30vh",
              ml: `${drawerWidth}px`,
              background:
                "linear-gradient(143.38deg, #354496 3.06%, #5238A8 118.21%)",
              opacity: "0.81",
            }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  flexGrow: 1,
                  textAlign: "right",
                  mr: 4,
                  mt: 4,
                  border: "none",
                }}>
                <UserSelect />
              </Box>
            </Box>
            <Menu variant="permanent" drawerWidth={drawerWidth} />
            <Box
              sx={{
                minHeight: "100vh",
                py: 8,
                px: 6,
              }}>
              <Typography
                sx={{ color: "white", mb: 1, display: "inline-block" }}
                variant="h6">
                {props.title}
              </Typography>
              <Box sx={{ display: "inline-block", mx: 2 }}>
                {props.title === "商談対応者設定" && <SiteSelect />}
              </Box>
              <Box sx={{ backgroundColor: "transparent" }}>
                {props.children}
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        // スマホデザイン
        <>
          <Box sx={{ display: "flex" }}>
            <AppBar
              position="fixed"
              sx={{
                width: "100%",
                backgroundColor: "#f5f5f5",
              }}>
              <Toolbar>
                <IconButton edge="start" onClick={() => setMenuOpen(true)}>
                  <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                  <UserSelect />
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <Menu
            variant="temporary"
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            drawerWidth={drawerWidth}
          />
          <Box sx={{ mt: 10, bgcolor: "transparent" }}>
            設置するサイト{props.title === "商談対応者設定" && <SiteSelect />}
            {props.children}
          </Box>
        </>
      )}
    </>
  );
};

export default HomeLayout;
