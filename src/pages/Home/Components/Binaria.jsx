import style from "./Binaria.module.css";
import { Box, Tooltip } from "@mui/material";
import Xai from "../../../assets/objects/Xai.png";
import Yanagi from "../../../assets/objects/Yanagi.png";
import Annabel from "../../../assets/objects/Annabel.png";
import Nagao from "../../../assets/objects/Nagao.png";
import PopoverComponent from "../../../components/Popover";
import { useEffect, useRef, useState } from "react";
import { useGetApi } from "../../../hooks/useGetApi";
import Frame from "../../../components/Members/Frame";
import { startMemberMovement } from "./animations/memberMovement";
import Chart from "../../../assets/BinariaChart2.png";

const MOVEMENT_CONFIG = {
  nagao: {
    orbitDuration: 43890,
    startAngle: 180,
    orbitDirection: -1,
    asteroidRotationDuration: 52000,
    asteroidWobbleDegrees: 5,
    minDepthScale: 0.88,
    maxDepthScale: 1.08,
    maskVisibleUntil: 0.3,
    maskFadeEnd: 0.4,
  },
  yanagi: {
    orbitDuration: 14140,
    startAngle: 180,
    orbitDirection: -1,
    asteroidRotationDuration: 52000,
    asteroidWobbleDegrees: 5,
    minDepthScale: 0.88,
    maxDepthScale: 1.18,
    maskVisibleUntil: 1,
    maskFadeEnd: 1,
  },
  annabel: {
    orbitDuration: 7000,
    startAngle: 180,
    orbitDirection: 1,
    asteroidRotationDuration: 52000,
    asteroidWobbleDegrees: 5,
    minDepthScale: 0.88,
    maxDepthScale: 1.18,
    maskVisibleUntil: 1,
    maskFadeEnd: 1,
  },
  xai: {
    orbitDuration: 22820,
    startAngle: 180,
    orbitDirection: -1,
    selfRotationEnabled: false,
    asteroidWobbleDegrees: 2,
    minDepthScale: 0.88,
    maxDepthScale: 1.18,
    maskVisibleUntil: 1,
    maskFadeEnd: 1,
  },
};

const Binaria = () => {
  const nagaoRef = useRef(null);
  const annabelRef = useRef(null);
  const yanagiRef = useRef(null);
  const xaiRef = useRef(null);
  const { getJsonFile } = useGetApi();

  useEffect(() => {
    return startMemberMovement(
      nagaoRef.current,
      style.nagaoOrbital,
      MOVEMENT_CONFIG.nagao
    );
  }, [style.nagaoOrbital]);

  useEffect(() => {
    return startMemberMovement(
      yanagiRef.current,
      style.orbital,
      MOVEMENT_CONFIG.yanagi
    );
  }, [style.orbital]);

  useEffect(() => {
    return startMemberMovement(
      annabelRef.current,
      style.internalOrbital,
      MOVEMENT_CONFIG.annabel
    );
  }, [style.internalOrbital]);

  useEffect(() => {
    return startMemberMovement(xaiRef.current, style.xaiOrbital, MOVEMENT_CONFIG.xai);
  }, [style.xaiOrbital]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [mbdata, setMbdata] = useState(null);

  const openDetails = (e) => {
    const id = e.currentTarget.getAttribute("id");
    setSelectedId(id);
    setAnchorEl(e.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  useEffect(() => {
    getJsonFile("mocks/data/members.json").then((data) => {
      setMbdata(data);
    });
  }, []);

  const renderContent = (id) => {
    const member = mbdata?.find((mb) => mb.id === id);

    switch (id) {
      case "yoshisa_nagao":
      case "yanaginagi":
      case "annabel":
      case "xai":
        return <Frame data={member} />;
      default:
        return '';
    }
  };

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

        <Box className={style.dashed45} />
        <Box className={style.inclinationAngle}></Box>

        <Box className={style.orbital}></Box>
        <Box className={style.internalOrbital}></Box>
        <Box className={style.nagaoOrbital}></Box>
        <Box className={style.xaiOrbital}></Box>

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

        <Tooltip title="Nagao">
          <img
            src={Nagao}
            className={style.NagaoAsteroid}
            id={"yoshisa_nagao"}
            onClick={openDetails}
            ref={nagaoRef}
          ></img>
        </Tooltip>

        <Tooltip title="Yanagi Nagi">
          <img
            src={Yanagi}
            className={style.YanagiAsteroid}
            id={"yanaginagi"}
            onClick={openDetails}
            ref={yanagiRef}
          ></img>
        </Tooltip>

        <Tooltip title="Annabel">
          <img
            src={Annabel}
            className={style.AnnabelStar}
            id={"annabel"}
            onClick={openDetails}
            ref={annabelRef}
          ></img>
        </Tooltip>

        <Tooltip title="Xai">
          <img
            src={Xai}
            className={style.xaiPlanet}
            id={"xai"}
            onClick={openDetails}
            ref={xaiRef}
          ></img>
        </Tooltip>

        {/* <img src={Chart} className={style.chart} ></img> */}

        <PopoverComponent anchorEl={anchorEl} onClose={handleClosePopover}>
          {renderContent(selectedId)}
        </PopoverComponent>
      </Box>
    </Box>
  );
};

export default Binaria;
