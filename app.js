const express = require('express')

require("./connection/connection")

const app = express()
const cors = require("cors");
const doctorRouter = require("./routers/doctor-routes")
const patientRouter = require("./routers/patient-routes")

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(doctorRouter)
app.use(patientRouter)









app.get('/',(req,res)=>{
  res.send("welcome to doctor-patient api")
})
// Create a new doctor


// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;