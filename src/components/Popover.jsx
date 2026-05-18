import { Box, Popover } from "@mui/material";

const PopoverComponent = ({ id, anchorEl, onClose }) => {
  const open = Boolean(anchorEl);

  const renderContent = () => {
    console.log("id", id)
    switch (id) {
      case "nagao":
        return <Box>{id}</Box>;
      default:
        return <Box>ERRADO</Box>;
    }
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      {renderContent()}
    </Popover>
  );
};

export default PopoverComponent;
