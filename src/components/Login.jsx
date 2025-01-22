import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div class="loginform">
        <h1 style={{color:'red',backgroundColor:'teal'}}>Login</h1>
        <TextField id="outlined-basic" label="UserName" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
        <Button variant="outlined">Login</Button>
    </div>
  )
}

export default Login