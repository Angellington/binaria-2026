import { Box, Popover } from "@mui/material";

const PopoverComponent = ({ anchorEl, onClose, children }) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      transitionDuration={{ exit: 3000 }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Box onMouseLeave={onClose}>{children}</Box>
    </Popover>
  );
};

export default PopoverComponent;
