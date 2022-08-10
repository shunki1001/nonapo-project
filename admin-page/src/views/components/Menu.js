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
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
    >
      <Box height="30%"></Box>
      <List>
        {["企業管理"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton selected>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
