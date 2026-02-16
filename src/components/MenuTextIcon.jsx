import React from 'react'
import Info from '../assets/icons/Info.png'
import { Stack, Typography, useTheme } from '@mui/material'

const MenuTextIcon = ({ text }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.background.custom,
        m: 0,
        p: 0,
        width: '13rem',
        height: '2rem',
      }}
    >
      <img
        src={Info}
        alt="icon"
        style={{
          width: 50,
          height: 50,
          objectFit: 'contain'
        }}
      />

      <Typography
        sx={{
          color: theme.palette.text.secondary,
          fontFamily: 'Cormorant Garamond, Courier, monospace'  ,
          fontSize: 20,
          fontStyle: 'italic',
          lineHeight: 1,
          whiteSpace: 'nowrap'
        }}
      >
        {text}
      </Typography>
    </Stack>
  )
}

export default MenuTextIcon