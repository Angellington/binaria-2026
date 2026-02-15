import { styled } from '@mui/material'
import React from 'react'

const NavbarDefault = styled('div', {
  name: 'NavbarDefault',
  slot: 'root',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#000',
  color: 'white',
}))

export default NavbarDefault