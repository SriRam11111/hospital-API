
require('./connection/connection')
const express = require('express')
const DoctorRouter = require('./routers/doctor-routes')
const PatientRouter = require('./routers/patient-routes')
const app = express();
app.use(express.json())
app.use(DoctorRouter);
app.use(PatientRouter);
app.listen(3001, () => {
    console.log("server running on port 3001");
  // console.log('Sc:\Users\LENOVO\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.htmlerver running on port 3001');
  });
