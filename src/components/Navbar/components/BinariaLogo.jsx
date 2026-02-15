import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const BinariaLogo = () => {
    const [isHover, setIsHover] = useState(false);
    const [logo, setLogo] = useState('/assets/binaria-logo-1.png')

    useEffect(() => {
        setIsHover(true)

    }, [logo])

  return (
    <Box width={'100px'} height={'10px'} m={5} sx={{ background: '#bd8888'}}> 

    </Box>
  )
}

export default BinariaLogo