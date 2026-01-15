import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <nav>
        <ul>
          <li><Link>about</Link></li>
          <li><Link>music</Link></li>
          <li><Link>prof</Link></li>
          <li><Link>contact</Link></li>
          <li><Link>JAPANESE</Link></li>
          <li><Link>top</Link></li>
        </ul>
      </nav>
    </Box>
  );
};

export default Navbar;
