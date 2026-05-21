import { Fragment } from "react";
import styles from "./Frame.module.css";
import { Box, Typography } from "@mui/material";

const Frame = (data) => {
  const backgroundValue = data.data?.background
    ? `url('${data.data.background}')`
    : "url('/assets/binariapattern.png')";

  console.log("data", data);

  Object.keys(data.data || {}).forEach((key) => {
    console.log(`${key}: ${data.data[key]}`);
  });

  console.log("data", data);

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
          console.log("data", key);

          return (
            <Fragment key={key}>
              {key === "role" && (
                <Typography>
                  main part:{" "}
                  {Array.isArray(data.data[key])
                    ? data.data[key].join("/")
                    : data.data[key]}
                </Typography>
              )}

                {key === "influences" && data.data[key].lenght > 0 && (
                <Typography>favorites: {data.data[key].join("/")}</Typography>
              )}

              {key === "soundStyle" && data.data[key].lenght > 0 && (
                <Typography>
                  sound style: {data.data[key].join("/")}
                </Typography>
              )}

              {key === "favorites" && (
                <Typography>favorites: {data.data[key].join("/")}</Typography>
              )}

              {key === "website" && (
                <Typography>
                  website:{" "}
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
