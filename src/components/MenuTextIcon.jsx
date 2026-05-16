import Info from "../assets/icons/Info.png";
import { Stack, Typography, useTheme } from "@mui/material";

const MenuTextIcon = ({ text }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.background.custom,
        position: "relative", 
        width: "13rem",
        height: "2rem",
      }}
    >
  
      <img
        src={Info}
        alt="icon"
        style={{
          position: "absolute",
          left: 5,
          width: 50,
          height: 50,
          objectFit: "contain",
          zIndex: 1,
        }}
      />

      <Typography
        sx={{
          position: "absolute",
          left: "55%", 
          transform: "translateX(-50%)", 
          color: theme.palette.text.secondary,
          fontFamily: "Cormorant Garamond, Courier, monospace",
          fontSize: 20,
          fontStyle: "italic",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default MenuTextIcon;
