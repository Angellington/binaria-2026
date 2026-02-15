import { Stack } from "@mui/material"
import BinariaLogo from "./components/BinariaLogo"
import NavbarDefault from "./components/MenuStyle"
import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

const Navbar = () => {

    const menuOptions = [{
        name: 'Home',
        path: '/home',
    }, {
        name: 'Music',
        path: '/music',
    }, {
        name: 'Shop',
        path: '/shop',
    }, {
        name: 'Contact',
        path: '/contact',
    }, {
        name: 'Letters Between Start',
        path: '/'
    }, {
        name: 'Top',
        path: '/top'
    }]

  return (
    <NavbarDefault>
        <BinariaLogo />
        <Stack direction={"row"} className={styles.navbar}>
            <nav>
                <ul>
                    {menuOptions.map((opt) => 
                       <li key={opt.name}>
                        <Link to={opt.path}>{opt.name}</Link>
                    </li>
                    )}
                </ul>
            </nav>
        </Stack>
    </NavbarDefault>
  )
}

export default Navbar