import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../theme/theme';
import { addTocart } from '../state/index';
import { useNavigate } from 'react-router-dom';

function Item({ item, width }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setHovered] = useState(false);
  const { palette: { neutral } } = useTheme();

  const { category, price, name, image } = item.attributes;

  console.log(item)

  
  

const url='ii'
  return (
    <Box  width={width}>
      <Box position='relative' onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
        <img
          alt={item.name}
          width='300px'
          height='400px'
          src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: 'pointer' }}
        />
        <Box display={isHovered ? "" : 'none'}
          position='absolute'
          bottom='10%'
          left='0'
          width='100%'
          padding='0 5%'
        >
          <Box display='flex' justifyContent='space-between'>
            <Box display='flex' alignItems='center' bgcolor={shades.neutral[100]}
              borderRadius='3px'
            >
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

            <Button onClick={() => { dispatch(addTocart({ item: { ...item, count } })) }}
              sx={{ background: shades.primary[300], color: "white" }}
            >
              Add to cart
            </Button>

          </Box>
        </Box>
      </Box>
      <Box mt='3px'>
        <Typography variant='subtitle' color={shades.dark}>
          {category
            .replace(/([A-Z])/g, "$1")
            .replace(/^./, (str) => str.toUpperCase())
          }
        </Typography>

        <Typography>{name}</Typography>
        <Typography fontWeight='bold'>${price}</Typography>
      </Box>
    </Box>
  );
}

export default Item;
