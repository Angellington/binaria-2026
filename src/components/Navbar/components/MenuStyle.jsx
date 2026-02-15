import { styled } from '@mui/material'
import React from 'react'

const NavbarDefault = styled('div', {
  name: 'NavbarDefault',
  slot: 'root',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#000',
  color: 'white',
  paddingLeft: '10px',
  paddingRight: '10px',
}))

export default NavbarDefault