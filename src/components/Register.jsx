import { Box, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <h1 style={{backgroundColor:'beige'}}>Registration Form</h1>
      <div>
        <div>
            <TextField
            required
            id="outlined-disabled"
            label="First Name"
            />
            <TextField
            disabled
            id="outlined-disabled"
            label="Last Name"
            />
        </div>
        
        <div>
            <TextField
            id="outlined-disabled"
            label="Password"
            type="password"
            autoComplete="current-password"
            />
            <TextField
            id="outlined-disabled"
            label="Address"
            />
        </div>
        <div>
            <TextField
            id="outlined-disabled"
            label="Phone Number"
            type="number"
            
            />
            <TextField id="outlined-disabled" label="Qualification" />
        </div>
      </div> 
    </Box>
  )
}

export default Register