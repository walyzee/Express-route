const express = require ('express');
const app = express();
var path = __dirname + '/public/'
const hours = new Date().getHours()
const openHours = hours >= 8 && hours < 17

app.use((req,res,next)=>
{
  openHours ? next() : res.send('<h1>SORRY! We are Closed<h1><h2>We are open from 8 AM to 5 PM</h2>')
})

app.get('/',(req,res)=>{
  res.sendFile(path+'home.html')
})

app.get('/services',(req,res)=>{
  res.sendFile(path+'ourservices.html')
})

app.get('/contact',(req,res)=>{
  res.sendFile(path+'contact.html')
})

app.listen(3000,(err)=>{
  if(err) 
    console.log('Server is not running');
  else 
    console.log('Server is running on port 3000...')
})