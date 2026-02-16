import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./Home.module.css";
import Info from "../../assets/icons/Info.png";
import ortography from "../../assets/albums/Ortography.png";
import ortography2 from "../../assets/albums/Matching.png";
import Diez from "../../assets/albums/Diez.jpg";
import MenuTextIcon from "../../components/MenuTextIcon";
import Passage from "../../components/Passage";
import Timeline from "./Components/Timeline";

const Home = () => {
  const lastReleases = [
    {
      name: "Ortography",
      img: ortography,
    },
    {
      name: "Ortography2",
      img: ortography2,
    },
    {
      name: "Diez",
      img: Diez,
    },
  ];

  return (
    <Box className={styles.home}>
      {/* Initial */}
      <Box className={styles.initial}>
        <MenuTextIcon text={"Information"} />
        <Stack direction="column" className={styles.last_releases}>
          {lastReleases.map((r) => (
            <div key={r.name} className={styles.release_item}>
              <img src={r.img} alt={r.name} className={styles.release_img} />
              <span className={styles.release_name}>{r.name}</span>
            </div>
          ))}
        </Stack>
        <Box pt={4}>
          <Passage text={'"Sono no Miaege, tadano memori"'} />
        </Box>
      </Box>
      <Box className={styles.timeline}>
      <Timeline />
      </Box>
    </Box>
  );
};

export default Home;
