import style from "./Binaria.module.css";
import { Box } from "@mui/material";
import Chart from "../../../assets/BinariaChart.png";

const Binaria = () => {
  return (
    <Box className={style.binaria}>
      <Box className={style.screen}>
        <Box className={style.line_axis_x} />
        <Box className={style.line_axis_y} />
        <Box className={style.abiscissas} />
        <Box className={style.ordinates} />
        <Box className={style.ordinatesH} />

        {/* DOTLINES  */}
        <Box className={style.dashed45} />

        {/* ORBITAL */}
        <Box className={style.orbital}></Box>

        {/* Texts  */}
        <Box className={style.heightGraphicLetter}>h</Box>


        <img src={Chart} className={style.chart} />
      </Box>
    </Box>
  );
};

export default Binaria;
