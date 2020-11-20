import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import SignUp from './signup-image.webp'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const Signup  = () =>{

  return(
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',height:"100vh",width:'100vw',backgroundColor:'#F8F8F8'}}>
    <Card style={{display:"flex",flexDirection:'row',width:'50%',borderRadius:'15px'}}>
    <Box 
    style={{
      display: "flex",
      justifyContent: "flex-start",
      padding: "10% 8%",
      width:"40%"
    }}>
    <Box
    style={{
      display: "flex",
    flexDirection: "column"
    }}
    >
    <h1>
    SignUp
    </h1>
    <input type="text" id="fname" name="fname" placeholder="Your Name" style={{border:'none',borderBottom:'1px solid #000'}}/><br></br>
  <input type="text" id="lname" name="lname" placeholder="Email" style={{border:'none',borderBottom:'1px solid #000'}}/><br></br>
  <input type="text" id="fname" name="fname" placeholder="Password" style={{border:'none',borderBottom:'1px solid #000'}}/><br></br>
  <input type="text" id="lname" name="lname" placeholder="Password" style={{border:'none',borderBottom:'1px solid #000'}}/><br></br>
  <div><input type="checkbox" id="lname" name="lname" /> I agree all statements in <a href="">terms of service</a></div>
  <Button style={{backgroundColor:'#6CB4EE',marginTop:'10%',color:'#fff',width: "fit-content",
  padding: "3% 6%"}}>SignUp</Button>
    
    </Box>
    </Box>
    <Box style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: "10%"
     
    }} >
    <Box style={{
      display: "flex",
    flexDirection: "column",
    alignItems: "center"
    }}>
   <img src={SignUp} style={{margin:'5%'}}></img>
   <Link to="/signin">I am already member</Link>
   </Box>
    </Box>
  
    
    </Card>

    </div>
  );

}

export default Signup