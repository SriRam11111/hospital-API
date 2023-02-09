const express = require("express")
const authentication = require("../middleware/authentication")
const doctorRouter = new express.Router()
const get = require("../controllers/doctorControllers")


doctorRouter.post('/doctors',authentication,get.getAllDoctors)
doctorRouter.post('/doctors',get.addDoctors)
doctorRouter.put('/doctors/:id',get.updateDoctors)
doctorRouter.delete('/doctors/:id',get.deleteDoctor)
doctorRouter.get('/doctors/:id',get.getDoctorById)
doctorRouter.post('/doctor/signin',get.signIn)

module.exports=doctorRouter