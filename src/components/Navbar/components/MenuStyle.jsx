import { styled } from '@mui/material'
import React from 'react'

const NavbarDefault = styled('div', {
  name: 'NavbarDefault',
  slot: 'root',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  justifyContent: 'space-between',
  height: '9.5vh',
  zIndex: 1000,
  backgroundColor: '#1e1e1ee6',
  color: 'white',
  paddingRight: '40px',
}))
export default NavbarDefault