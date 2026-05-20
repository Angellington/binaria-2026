import styles from "./Frame.module.css";
import { Box, Typography } from "@mui/material";

const NagaoFrame = (data) => {
  const backgroundValue = data.data?.background
    ? `url('${data.data.background}')`
    : "url('/assets/binariapattern.png')";

  return (
    <Box
      className={styles.frame}
      sx={{
        background: backgroundValue,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography>{data.data?.name}</Typography>
      <Box>
        <Typography>main part : {data.data?.role}</Typography>
        <Typography>
          sound style : {data.data?.soundStyle?.join(" / ") || "none"}
        </Typography>
        <Typography>
            favorite : {data.data?.favorites?.join(" / ") || "none"}
        </Typography>

           <Typography>
            website : <a href={data.data?.website?.label}target="_blank"> {data.data?.website?.label} </a>
        </Typography>

      </Box>
    </Box>
  );
};

export default NagaoFrame;
