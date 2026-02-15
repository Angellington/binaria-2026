import { Box, Drawer, IconButton, Stack } from "@mui/material";
import BinariaLogo from "./components/BinariaLogo";
import NavbarDefault from "./components/MenuStyle";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { NavbarMobile } from "./components/NavbarMobile";
import { useResponsive } from "../../hooks/useResponsive";
import { Close, MenuSharp } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const { isMobile } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOptions = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Music",
      path: "/music",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Letters Between Start",
      path: "/",
    },
    {
      name: "Top",
      path: "/top",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  if (isMobile) {
    return (
      <NavbarMobile className={styles.navbar_mobile}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
          paddingRight={4}
        >
          <BinariaLogo />

     <IconButton
  onClick={() => setMenuOpen(true)}
  className={styles.menu_button}
>
  <MenuSharp />
  <span className={styles.menu_text}>Menu</span>
</IconButton>
        </Stack>
        <Drawer
          anchor="top"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          className={styles.menuMobile}
        >
          <Box component={"div"}>
            <nav>
              <ul>
                {menuOptions.map((opt) => (
                  <li key={opt.name}>
                    <Link onClick={() => setMenuOpen(false)} to={opt.path}>{opt.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Box>
        </Drawer>
      </NavbarMobile>
    );
  }

  return (
    <NavbarDefault>
      <BinariaLogo />
      <Stack direction={"row"} className={styles.navbar}>
        <nav>
          <ul>
            {menuOptions.map((opt) => (
              <li key={opt.name}>
                <Link to={opt.path}>{opt.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Stack>
    </NavbarDefault>
  );
};

export default Navbar;
