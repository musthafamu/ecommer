import React from 'react'
import { Box ,useTheme,Typography} from '@mui/material'
import { shades } from '../../theme/theme'


function Footer() {
  const { palette:{neutral}}=useTheme();


  return (
 <Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
    <Box width='80%' margin='auto' display='flex'  justifyContent='space-between'
     flexWrap='wrap'
     rowGap='30px'
     columnGap='clamp(20px,30px,40px)'

        
    >
   <Box width='clamp(20%,30%,40%)'>

    <Typography variant='h4' fontWeight='bold' mb='30px' color={shades.secondary[500]}>
       ECommer
       </Typography>
       <div>
       E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It has become a fundamental aspect of modern business, transforming the way people shop and conduct transactions. E-commerce encompasses various online activities, including online retail stores, digital marketplaces, online auctions, and electronic banking.


       </div>

   </Box> 
   <Box>
    <Typography variant='h4' fontWeight='bold' mb='30px' > About Us</Typography>
    <Typography mb='30px'>Careers</Typography>
    <Typography mb='30px'>Our store</Typography>
    <Typography mb='30px'>Term and conditions</Typography>
    <Typography mb='30px'>Privacy policy</Typography>
   </Box>
   <Box>
    <Typography variant='h4' fontWeight='bold' mb='30px' > customer Care</Typography>
    <Typography mb='30px'>help Center</Typography>
    <Typography mb='30px'>Track Your Order</Typography>
    <Typography mb='30px'>Corporate and Bulk</Typography>
    <Typography mb='30px'>Returns & Refunds</Typography>
   </Box>
   <Box>
    <Typography variant='h4' fontWeight='bold' mb='30px' > Contact Us</Typography>
    <Typography mb='30px'>50 North whatever</Typography>
    <Typography mb='30px'>Email:something@gmail.com</Typography>
    <Typography mb='30px'>(222)333-4444-67</Typography>

   </Box>

    </Box>
 </Box>
  )
}

export default Footer