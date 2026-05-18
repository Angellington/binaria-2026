import style from "./Binaria.module.css";
import { Box } from "@mui/material";
import Chart from "../../../assets/BinariaChart2.png";

const Binaria = () => {
  return (
    <Box className={style.binaria}>
      <Box className={style.screen}>
        <Box className={style.line_axis_x} />
        <Box className={style.line_axis_y} />
        <Box className={style.abiscissas} />
        <Box className={style.ordinates} />
        <Box className={style.ordinatesH} />

        <Box className={style.absiscissasA1} />
        <Box className={style.absiscissasA2} />
        <Box className={style.absiscissasBottom} />

        {/* DOTLINES  */}
        <Box className={style.dashed45} />

        {/* Angles */}
        <Box className={style.inclinationAngle}></Box>

        {/* ORBITAL */}
        <Box className={style.orbital}></Box>
        <Box className={style.internalOrbital}></Box>
        <Box className={style.nagaoOrbital}></Box>
        <Box className={style.xaiOrbital}></Box>

        {/* Texts  */}
        <Box className={style.heightGraphicLetter}>h</Box>
        <Box className={style.A1GraphicLetter}>a1</Box>
        <Box className={style.A2GraphicLetter}>a2</Box>
        <Box className={style.inclinationAngleLetter}>inclination angle</Box>
        <Box className={style.inclinationAngleJapanese}>軌道傾斜角 81.4°</Box>
        <Box className={style.binarySeparation}>
          binary separation 連星間距離 α
        </Box>
        <Box className={style.Hipparcos}>α=38.0 AS pc (Hipparcos)</Box>
        <Box className={style.orbitalPlane}>orbital plane</Box>
         <Box className={style.orbitalPlaneJapanese}>軌道面</Box>

        {/* <img src={Chart} className={style.chart} /> */}
      </Box>
    </Box>
  );
};

export default Binaria;
