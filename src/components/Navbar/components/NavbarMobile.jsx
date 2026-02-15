import { styled } from '@mui/material'


export const NavbarMobile = styled('div', {
  name: 'NavbarMobile',
  slot: 'root',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  justifyContent: 'space-between',
  backgroundColor: '#000000cb',
  color: 'white',
  zIndex: theme.zIndex.appBar,
  
  
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  
  
  height: '56px',
  
  
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  
  [theme.breakpoints.up('sm')]: {
    height: '64px',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}))