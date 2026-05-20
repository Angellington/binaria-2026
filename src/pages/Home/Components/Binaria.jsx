import style from "./Binaria.module.css";
import { Box, Tooltip } from "@mui/material";
import Xai from "../../../assets/objects/Xai.png";
import PopoverComponent from "../../../components/Popover";
import { useEffect, useRef, useState } from "react";
import { startNagaoMovement } from "./animations/nagaoMovements";

const Binaria = () => {
  const nagaoRef = useRef(null)

  useEffect(() => {
    return startNagaoMovement(nagaoRef.current, style.nagaoOrbital)
  }, [style.nagaoOrbital])


  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedId, setSelectedId] = useState(null)


  const openDetails = (e) => {
    console.log("e", e.currentTarget);

    const id = e.currentTarget.getAttribute('id');

    console.log(e.currentTarget)
    setSelectedId(id);
    setAnchorEl(e.currentTarget)
  };

  const handleClosePopover = () => {
    setAnchorEl(null)
    setSelectedId(null)
  }

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

        <Tooltip title="Xai">
          <img src={Xai} className={style.NagaoAsteroid} id={"nagao"} onClick={openDetails}
          
          ref={nagaoRef}
          ></img>
        </Tooltip>

        {/* <img src={Chart} className={style.chart} /> */}

      
        <PopoverComponent
          id={selectedId}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          />
      </Box>
    </Box>
  );
};

export default Binaria;
