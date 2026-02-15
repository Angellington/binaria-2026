import { Box } from '@mui/material'; // ou o Box que você está usando
import Navbar from './Navbar/Navbar';

const AppLayout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default AppLayout;