import React from 'react'
import MyAccount from './myAccount/MyAccount'
import Faq  from './faq/Faq'
import { Box } from '@mui/material'
const DefaultIndex = () => {
  return (
    <Box>
      <Box>
        <MyAccount/>
      </Box>
      <Box>
        <Faq/>
      </Box>
    </Box>
  )
}

export default DefaultIndex