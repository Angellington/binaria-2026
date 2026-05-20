import style from "./Binaria.module.css";
import { Box, Tooltip } from "@mui/material";
import Xai from "../../../assets/objects/Xai.png";
import Yanagi from "../../../assets/objects/Yanagi.png";
import PopoverComponent from "../../../components/Popover";
import { useEffect, useRef, useState } from "react";
import { startNagaoMovement } from "./animations/nagaoMovements";
import NagaoFrame from "../../../components/Members/NagaoFrame";
import { useGetApi } from "../../../hooks/useGetApi";


const Binaria = () => {
  const nagaoRef = useRef(null);
  const yanagiRef = useRef(null);
  const { getJsonFile } = useGetApi();

  useEffect(() => {
    return startNagaoMovement(nagaoRef.current, style.nagaoOrbital);
  }, [style.nagaoOrbital]);

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
    console.log("mbdata", mbdata);

    const member = mbdata?.find((mb) => mb.id === id);

    switch (id) {
      case "yoshisa_nagao":
        return <NagaoFrame data={member} />;
      default:
        return <Box></Box>;
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

        <Tooltip title="Nagao">
          <img
            src={Xai}
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

        <img src={"assets/chart.png"} className={style.chart} />

        <PopoverComponent anchorEl={anchorEl} onClose={handleClosePopover}>
          {renderContent(selectedId)}
        </PopoverComponent>
      </Box>
    </Box>
  );
};

export default Binaria;
