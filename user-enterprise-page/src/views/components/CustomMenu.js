import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoTop from "../../img/log-tp.png";

const menuOptions = [
  { label: "企業管理", url: "/", external: false },
  { label: "アポイント管理", url: "/appointment", external: false },
  {
    label: "ヘルプ・お問い合わせ",
    url: "https://non-appoint.com/help.html",
    external: true,
  },
  {
    label: "利用規約",
    url: "https://non-appoint.com/terms.pdf",
    external: true,
  },
  {
    label: "プライバシーポリシー",
    url: "https://non-appoint.com/privacy.pdf",
    external: true,
  },
];

const CustomMenu = (props) => {
  const { menuOpen, setMenuOpen, variant, drawerWidth } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleClickMenu = (menuItem, index) => {
    setSelectedIndex(index);
    if (menuItem.external === true) {
      window.location.replace(menuItem.url);
      return null;
    } else {
      navigate(menuItem.url);
    }
  };

  return (
    <Drawer
      variant={variant}
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
          backgroundColor: "#2469B3",
        },
      }}
      open={menuOpen}
      onClose={() => setMenuOpen(false)}>
      <Box height="5vh"></Box>
      <Box height="5vh" width="100%">
        <img src={logoTop} alt="logo" style={{ maxHeight: "100%" }} />
      </Box>
      <Box height="10vh"></Box>
      <List sx={{ height: "20vh" }}>
        {menuOptions.map((menuItem, index) => {
          return (
            <>
              <ListItem key={menuItem.label} disablePadding>
                <ListItemButton
                  selected={index === selectedIndex}
                  onClick={() => handleClickMenu(menuItem, index)}
                  sx={{
                    "&.Mui-selected": { backgroundColor: "rgba(0,0,0,0.2)" },
                  }}>
                  <ListItemText
                    primary={menuItem.label}
                    sx={{
                      color: "#ffffff",
                      "& span": { fontSize: "0.85rem" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {index === 1 && <Box height="40vh"></Box>}
            </>
          );
        })}
      </List>
    </Drawer>
  );
};

export default CustomMenu;
