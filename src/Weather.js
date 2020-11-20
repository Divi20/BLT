
import React,{useEffect,useState} from 'react'
import W from './w.jpg'
import axios from 'axios'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Card } from '@material-ui/core';
export default function Weather() {

  const [city, setCity] = useState(10)


  useEffect(()=>{

    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0e177e04c9mshf4289e771e1adffp19a911jsn2a3cafd3057d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
    
  },[])
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
   <div style={{marginTop:"20px",
  backgroundImage:`url(${W})`,
  height: "100vh",
  backgroundSize: "cover"}}>
<div style={{color:'#fff',height:'20px',width:'20%'}}>
<FormControl fullWidth style={{margin:'10%'}}>
<InputLabel id="demo-simple-select-label">City</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={city}
  onChange={handleChange}
  style={{backgroundColor:'#fff',color:"#fff"}}
>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>
</FormControl>

</div>

<div>
<Box style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'100vh'}}>
<Card style={{height:'10%',width:'10%',backgroundColor:'white',margin:'5%'}}>
<h1>Temperature</h1>
</Card>
<Card style={{height:'10%',width:'10%',backgroundColor:'white',margin:'5%'}}>
<h1>Humidity</h1>
</Card>
<Card style={{height:'10%',width:'10%',backgroundColor:'white',margin:'5%'}}>
<h1>Cloud</h1>
</Card>
</Box>
</div>
   
   </div>
  );
}