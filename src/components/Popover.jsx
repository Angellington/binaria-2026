import { Box, Popover } from "@mui/material";

const PopoverComponent = ({ anchorEl, onClose, children }) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      transitionDuration={{ enter: 180, exit: 180 }}
      sx={{ pointerEvents: "none" }}
      slotProps={{
        paper: {
          onMouseLeave: onClose,
          sx: { pointerEvents: "auto" },
        },
      }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Box>{children}</Box>
    </Popover>
  );
};

export default PopoverComponent;
