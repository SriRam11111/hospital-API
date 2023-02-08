const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2'
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

MONGODB_URI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2'

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


// const bodyParser = require('body-parser');

// app.use((req, res, next) => {
//   if (req.method === 'POST' || req.method === 'PUT') {
//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({ extended: true }));
//   }
//   next();
// });



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