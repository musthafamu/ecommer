import React from 'react'
import {Box,Checkbox,FormControlLabel,Typography} from '@mui/material';
import  AddressForm from './AddressForm'

function Shipping({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) {
  return (
   <Box m='30px auto'   >
    <Box>
        <Typography fontSize='18px' sx={{mb:"15px"}} >
            Billing Information
        </Typography>
        <AddressForm   
          type='billingAddress'
          values={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

      

    </Box>
    <Box mb='20px'>
        <FormControlLabel
        
          control={
            <Checkbox 
            defaultChecked
            value={values.shippingAddress.isSameAddress}
            onChange={()=>setFieldValue(
'shippingAddress.isSameAddress',
          !values.shippingAddress.isSameAddress
            )}
            />
          }
        />

       {!values.shippingAddress.isSameAddress&&(
        <Box>
         <Typography fontSize='18px' sx={{mb:"15px"}} >
            Shipping Information
        </Typography>
        <AddressForm   
          type='shippingAddress'
          values={values.shippingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        </Box>
       )}

    </Box>



   </Box>
  )
}

export default Shipping