import { Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import BinariaLogo from "./components/BinariaLogo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "about", path: "/about" },
    { label: "music", path: "/music" },
    { label: "prof", path: "/prof" },
    { label: "contact", path: "/contact" },
    { label: "JAPANESE", path: "/jp" },
    { label: "top", path: "/" },
  ];

  return (
    <Box className={styles.navbar}>
    <BinariaLogo />

      <nav className={styles.desktopMenu}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <IconButton
        className={styles.mobileMenuButton}
        onClick={() => setOpen(true)}
      >
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.label}
              component={Link}
              to={item.path}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;