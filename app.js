const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2'
const app = express()
const hospitalrouter = require("./routers/routers")
const bodyParser = require('body-parser');
mongoose.set('strictQuery', false);
// mongoose.connect(url)
// const con = mongoose.connection

// con.on('open',function(){
//     console.log('connected.....')
// })

// checking if account is changed or not 
app.use(hospitalrouter)

mongoose.connect(url,{ useNewUrlParser: true },(err)=>{
    if(err){
    console.log(err)
}
else{
    console.log("successfully DB connected")
}})

app.use(bodyParser.json());



const Doctor = require('./models/doctormodels');
const Patient = require('./models/patientmodel')


app.get('/',(req,res)=>{
  res.send("welcome to doctor-patient api")
})
// Create a new doctor


// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});