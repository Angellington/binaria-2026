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
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: '#000000c7',
  color: 'white',
  paddingRight: '40px'
}))
export default NavbarDefault