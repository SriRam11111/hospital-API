const express = require("express")
const authentication = require("../middleware/authentication")
const doctorRouter = new express.Router()
const get = require("../controllers/doctorControllers")



doctorRouter.get('/doctors',get.getAllDoctors)
doctorRouter.post('/doctors',get.addDoctors)
doctorRouter.put('/doctors/:id',get.updateDoctors)
doctorRouter.delete('/doctors/:id',get.deleteDoctor)
doctorRouter.get('/doctors/doctorprofile',authentication,get.doctorProfile)
doctorRouter.post('/doctor/signin',get.signIn)
doctorRouter.get('/doctorpatients',authentication,get.getDoctorPatients)

module.exports=doctorRouter