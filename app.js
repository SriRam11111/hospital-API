
require('./connection/connection')
const express = require('express')
const DoctorRouter = require('./routers/doctor.router')
const PatientRouter = require('./routers/patient.router')
const app = express();
app.use(express.json())
app.use(DoctorRouter);
app.use(PatientRouter);
app.listen(3001, () => {
    console.log('Server running on port 3001');
  });