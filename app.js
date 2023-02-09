
// require('./connection/connection')
// const express = require('express')
// const DoctorRouter = require('./routers/doctor-routes')
// const PatientRouter = require('./routers/patient-routes')
// const app = express();
// app.use(express.json())
// app.use(DoctorRouter);
// app.use(PatientRouter);
// app.listen(3001, () => {
//     console.log("server running on port 3001");
//   // console.log('Sc:\Users\LENOVO\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.htmlerver running on port 3001');
//   });
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

// <<<<<<< HEAD
// MONGODB_URI = 'mongodb+srv://database:Database@cluster0.g8vaoci.mongodb.net/test'
// =======
// MONGODB_URI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2'
// >>>>>>> development

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