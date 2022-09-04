import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Menu = (props) => {
  const { menuOpen, setMenuOpen, variant, drawerWidth } = props;
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
      onClose={() => setMenuOpen(false)}
    >
      <Box height="35vh"></Box>
      <List>
        {["企業管理"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              selected
              sx={{
                "&.Mui-selected": { backgroundColor: "rgba(0,0,0,0.2)" },
              }}
            >
              <ListItemIcon sx={{ color: "#ffffff" }}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "#ffffff" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
