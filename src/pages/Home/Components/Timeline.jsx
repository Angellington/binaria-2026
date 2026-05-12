import { Box } from "@mui/material";
import styles from "./Timeline.module.css";
import { useGetApi } from "../../../hooks/useGetApi";
import { useEffect, useState } from "react";

const Timeline = () => {
  const timelineJson = "mocks/data/discography.json";
  const { getJsonFile, loadingFetch, errorFetch } = useGetApi();
  const [timeline, setTimeline] = useState('')
  
  useEffect(() => {
    const data = getJsonFile(timelineJson).then((data) => {
      setTimeline(data)
    })
  }, [])

  

  return <Box className={styles.timeline}>Timeline</Box>;
};

export default Timeline;
