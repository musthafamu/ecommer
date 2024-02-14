import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { IconButton, Box, Tab,  Tabs,Typography, useTheme, Button } from '@mui/material';
import favorite  from '@mui/icons-material/FavoriteBorderOutlined'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades }  from '../../theme/theme'
import { addTocart } from '../../state/index';
import { useNavigate, useParams } from 'react-router-dom';
 import Item from '../../components/item'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';

function ItemDetail() { 
  const  [count,setCount]=useState(1)
  const [value,setValue]=useState('description')
  const  [item,setItem]=useState(null)
  const [items,setItems]=useState([])
  const {itemId}=useParams()
  const dispatch=useDispatch()



const  handleChange=(event,newValue)=>{
  setValue(newValue)
}

const getItem=async()=>{
     const item=await fetch(`http://localhost:1337/api/items/${itemId}?populate=image `,{
      method:"GET"
     });

     const itemsJson=await item.json();
     setItem(itemsJson.data);
   


     
}

const getItems=async()=>{
  const item=await fetch(`http://localhost:1337/api/items?populate=image`,{
    method:"GET"

  })
  const itemsJson=await item.json();
  setItems(itemsJson.data)
 
}
console.log(items)


useEffect(()=>{
  getItem()
  getItems()
},[itemId]) 



  return ( 
 <Box  width='80%' margin='80px auto' >
    <Box display='flex' flexWrap='wrap' columnGap='40px'>
       <Box flex='1 1 40%'   mb='40px' >
        <img alt={item?.name} width='100%' height='100%'  src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} 
        />
       </Box>
       <Box flex='1 1 40%' mb='40px'>
         <Box display='flex' justifyContent='space-between'>
          <Box>Home/Item</Box>
          <Box>prev Next</Box>

         </Box>
         <Box m='65px 0 25px  0 '>
          <Typography variant='h3'>{item?.attributes?.name}</Typography>
      <Typography>${item?.attributes?.price}</Typography>
      <Typography sx={{mt:"20px"}}>
{item?.attributes?.longdescr[0].children[0].text}
       
      </Typography>
         </Box>
         <Box  p='10px' display='flex' alignItems='center' minHeight='50px'>
          <Box display='flex' mr='20px' p='2px 5px' alignItems='center'  border={`1.5px solid ${shades.neutral[300]}`}>
          <IconButton
                onClick={() => setCount(Math.max(count - 1 , 1))}
              >
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton
                onClick={() => setCount(count + 1)}
              >
                <AddIcon />
              </IconButton>
          </Box>
          <Button 
          onClick={()=>dispatch(addTocart({item:{...item,count}}))}
          sx={{background:"#222222" ,color:"white",minWidth:"150px", padding:"10px 40px"}}>Add to Cart</Button>

         </Box>
<Box m='20px 0 5px 0' display='flex'>
  <FavoriteBorderOutlined  />
  <Typography sx={{ml:"5px"}}>Add to wishlist</Typography>

</Box>
<Typography>CATEGORIES:{item?.attributes?.category}</Typography>
       </Box>
    </Box>
    <Box m='20px 0'>
      <Tabs value={value} onChange={handleChange}>
        < Tab label='Description' value='description'/>
        < Tab label='Reviews' value='reviews'/>
      </Tabs>
      
    </Box>
    <Box display='flex' flexWrap='wrap' gap='15px'>
{value =='description' &&(
  <Typography>
{ item?.attributes?.longdescr[0].children[0].text}
  
  </Typography>
)}
{value =='reviews' &&(
  <Typography>
Reviews
  
  </Typography>
)}
    </Box>
    <Box mt='50px' width='100%'>
      <Typography variant='h3' fontWeight='bold'>
        Related Products

      </Typography>
  <Box  display='flex' flexWrap='wrap' columnGap='1.33%' justifyContent='space-between' mt='20px'>
   {items.slice(0,4).map((item,i)=><Item key={i} item={item} />)}

  </Box>
    </Box>
 </Box>
  )
}

export default ItemDetail