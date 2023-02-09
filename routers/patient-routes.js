const express = require("express")
const patientRouter = new express.Router()
const get =  require("../controllers/patientControllers")

patientRouter.get('/patients',get.getAllPatients)
patientRouter.post('/patients',get.addPatient)
patientRouter.put('/patients/:id',get.updatePatient)
patientRouter.delete('/patients/:id',get.deletePatient)
patientRouter.get('/patients/:id',get.getPatientById)



module.exports=patientRouter