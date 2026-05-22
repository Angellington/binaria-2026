import { Fragment } from "react";
import styles from "./Frame.module.css";
import { Box, Typography } from "@mui/material";

const Frame = (data) => {
  const backgroundValue = data.data?.background
    ? `url('${data.data.background}')`
    : "url('/assets/binariapattern.png')";

  Object.keys(data.data || {}).forEach((key) => {
    console.log(`${key}: ${data.data[key]}`);
  });

  return (
    <Box
      className={styles.frame}
      sx={{
        background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.6)), ${backgroundValue}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography className={styles.nameTitle}>{data.data?.name}</Typography>

      <Box>
        {Object.keys(data.data || {}).map((key) => {
          return (
            <Fragment key={key}>
              {key === "role" && (
                <Typography>
                  main part :{" "}
                  {Array.isArray(data.data[key])
                    ? data.data[key].join("/")
                    : data.data[key]}
                </Typography>
              )}

              {key === "materials" && (
                <Typography>
                  materials :{" "}
                  {Array.isArray(data.data[key])
                    ? data.data[key].join("/")
                    : data.data[key]}
                </Typography>
              )}

              {key === "birthplace" && data.data[key] && (
                <Typography>birth place : {data.data[key]}</Typography>
              )}

              {key === "influences" && data.data[key].length > 0 && (
                <Typography>affected : {data.data[key].join("/")}</Typography>
              )}

              {key === "soundStyle" && data.data[key].length > 0 && (
                <Typography>
                  {console.log("INDO INDO INDO", data.data[key])}
                  sound style : {data.data[key].join("/")}
                </Typography>
              )}

              {key === "favorites" && (
                <Typography>favorites : {data.data[key].join("/")}</Typography>
              )}

              {key === "website" && (
                <Typography>
                  website :{" "}
                  <a
                    href={data.data[key].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.data[key].label}
                  </a>
                </Typography>
              )}
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default Frame;
