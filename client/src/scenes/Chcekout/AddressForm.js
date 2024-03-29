import React from 'react'
import { Box,useMediaQuery,Typography, TextField } from '@mui/material';
import {getIn} from 'formik'

function AddressForm({

          type,
          values,
          errors,
          touched,
          handleBlur,
          handleChange
      
}) {
  const isNonmobile=useMediaQuery("(min-width:600px)")
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

    const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));
    
    console.log('values:', values);
    console.log('errors:', errors);
    console.log('touched:', touched);
    console.log('formattedHelper:', formattedHelper('firstName'));
    
 
  return (
   <Box  
   display='grid'
   gap='15px'
   gridTemplateColumns="repeat(4,minmax(0,1fr))"
   sx={{
    "&>div":{gridColumn:isNonmobile?undefined:"span 4"}
   }}

   >

    <TextField fullWidth  
       type='text'
       label='fist name'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.firstName}
       name={formattedName('firstName')}
       error={formattedError('firstName')}
       helperText={formattedHelper('firstName')}

           sx={{gridColumn:"span 2"}}
    />
    <TextField fullWidth  
       type='text'
       label='last name'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.lastName}
       name={formattedName('lastName')}
       error={formattedError('lastName')}
       helperText={formattedHelper('lastName')}

           sx={{gridColumn:"span 2"}}
    />
    <TextField fullWidth  
       type='text'
       label='country'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.country}
       name={formattedName('country')}
       error={formattedError('country')}
       helperText={formattedHelper('country')}

           sx={{gridColumn:"span 4"}}
    />
    <TextField fullWidth  
       type='text'
       label='street Address'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.street1}
       name={formattedName('street1')}
       error={formattedError('street1')}
       helperText={formattedHelper('street1')}

           sx={{gridColumn:"span 2" }}
    />
    <TextField fullWidth  
       type='text'
       label='street Address 2 (optional)'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.street2}
       name={formattedName('street2')}
       error={formattedError('street2')}
       helperText={formattedHelper('street2')}

           sx={{gridColumn:"span 2" }}
    />
    <TextField fullWidth  
       type='text'
       label='city'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.city}
       name={formattedName('city')}
       error={formattedError('city')}
       helperText={formattedHelper('city')}

           sx={{gridColumn:"span 2" }}
    />
    <TextField fullWidth  
       type='text'
       label='state'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.state}
       name={formattedName('state')}
       error={formattedError('state')}
       helperText={formattedHelper('state')}

           sx={{gridColumn:"1fr" }}
    />
    <TextField fullWidth  
       type='text'
       label='zipcode'
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.zipCode}
       name={formattedName('zipcode')}
       error={formattedError('zipcode')}
       helperText={formattedHelper('zipcode')}

           sx={{gridColumn:"1fr" }}
    />

   </Box>
  )
}

export default AddressForm