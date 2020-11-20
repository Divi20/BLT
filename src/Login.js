import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import SignIn from './signin-image.webp'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const Login  = () =>{

  return(
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',height:"100vh",width:'100vw',backgroundColor:'#F8F8F8'}}>
    <Card style={{display:"flex",flexDirection:'row',width:'50%',borderRadius:'15px'}}>
    <Box style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10%"
    }} >
    <Box style={{
      display: "flex",
    flexDirection: "column",
    alignItems: "center"
    }}>
   <img src={SignIn} style={{margin:'5%'}}></img>
   <Link to="/signup">Create an account</Link>
   </Box>
    </Box>
    <Box 
    style={{
      display: "flex",
      justifyContent: "flex-start",
      padding: "8%",
      paddingLeft:"0%",
      width:'100%'
    }}>
    <Box
    style={{
      display: "flex",
    flexDirection: "column",
    width:"-webkit-fill-available"
    }}
    >
    <h1>
    Login
    </h1>
  <input type="text" id="fname" name="fname" placeholder="Your Name" style={{border:'none',borderBottom:'1px solid #000'}}/><br></br>
  <input type="text" id="lname" name="lname" placeholder="Password" style={{border:'none',borderBottom:'1px solid #000'}}/><br></br>
  <div><input type="checkbox" id="lname" name="lname" /> Remember Me</div>
  <Button style={{backgroundColor:'#6CB4EE',marginTop:'10%',color:'#fff',width: "fit-content",
  padding: "3% 6%"}}>Login</Button>

  <Box style={{display:'flex',marginTop:'45%'}}>
  or Login with 
  <span>   Google  </span>
  <span>  Twitter  </span>
  <span>  FaceBook  </span>


  </Box>
    
    </Box>

   
    
    
    </Box>
    
    </Card>

    </div>
  );

}

export default Login