import { Typography, useTheme } from '@mui/material'
import React from 'react'

const Passage = ({text}) => {
    const theme = useTheme()
  return (
     <Typography
           sx={{
             color: theme.palette.text.primary,
             fontFamily: 'Cormorant Garamond, Courier, monospace'  ,
             fontSize: 30,
             fontStyle: 'italic',
             fontWeight: 600,
             lineHeight: 1,
             whiteSpace: 'nowrap'
           }}
         >
           {text}
         </Typography>
  )
}

export default Passage