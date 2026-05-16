import { Box, Typography, useTheme } from "@mui/material";
import styles from "./Timeline.module.css";
import { useGetApi } from "../../../hooks/useGetApi";
import { useEffect, useState } from "react";
import { Star } from "@mui/icons-material";
import Line from "../../../components/Line";
import parse from "html-react-parser";

const Timeline = () => {
  const timelineJson = "mocks/data/discography.json";
  const { getJsonFile } = useGetApi();
  const [timeline, setTimeline] = useState("");

  const theme = useTheme();

  useEffect(() => {
    getJsonFile(timelineJson).then((data) => {
      setTimeline(data);
    });
  }, []);

  // if (loadingFetch) {
  //   return <CircularProgress />;
  // }

  return (
    <Box
      className={styles.timeline}
      sx={{
        "--secondary-color": theme.palette.secondary.main,
        "--text-color": theme.palette.text.primary,
      }}
    >
      <Box
        className={styles.contentWrapper}
        component="section"
        aria-label="Timeline content"
      >
        {timeline.length > 0 &&
          timeline.map((tm) => (
            <Box className={styles.mainContainer}>
              <Typography className={styles.yearTitle} component="h2">
                {tm.year}
              </Typography>

              {tm.discography.length > 0 &&
                tm.discography.map((ds) => (
                  <Box className={styles.flexRow}>
                    <Box className={styles.starline}>
                      <Star
                        className={styles.starIcon}
                        sx={{ color: theme.palette.primary.light }}
                        aria-label="Star icon"
                      />
                      <Box className={styles.lineComponent}>
                        <Line />
                      </Box>
                    </Box>

                    <article className={styles.date_box}>
                      <Typography className={styles.date} component="time">
                        {ds.day}
                      </Typography>

                      <Typography className={styles.text} component="div">
                        {parse(ds.html)}
                      </Typography>
                    </article>
                  </Box>
                ))}
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Timeline;
