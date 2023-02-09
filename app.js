// const middleware=require('./middleware/authentication')
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://database:Database@cluster0.g8vaoci.mongodb.net/test'
const app = express()
const cors = require("cors");
const doctorRouter = require("./routers/doctor-routes")
const patientRouter = require("./routers/patient-routes")

mongoose.set('strictQuery', false);
// mongoose.connect(url)
// const con = mongoose.connection

// con.on('open',function(){
//     console.log('connected.....')
// })

// checking if account is changed or not 


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(doctorRouter)
app.use(patientRouter)

mongoose.connect(url,{ useNewUrlParser: true },(err)=>{
    if(err){
    console.log(err)
}
else{
    console.log("successfully DB connected")
}})


app.get('/',(req,res)=>{
  res.send("welcome to doctor-patient api")
})
// Create a new doctor


// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

module.exports = app;