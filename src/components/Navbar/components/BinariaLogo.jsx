import { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./binaria-logo.module.css";

const BinariaLogo = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.logo} onClick={() => navigate('/')}>
      <img className={styles.logoBase} src="/assets/binaria-logo-1.png" alt="logo" />
      <img className={styles.logoHover} src="/assets/binaria-logo-2.png" alt="logo hover" />
    </Box>
  );
};


export default BinariaLogo