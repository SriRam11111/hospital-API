const express = require("express")
const doctorRouter = new express.Router()
const get = require("../controllers/doctorControllers")
const auth=require('../middleware/authentication')


doctorRouter.get('/doctors',get.getAllDoctors)
doctorRouter.post('/doctors',get.addDoctors)
doctorRouter.put('/doctors/:id',get.updateDoctors)
doctorRouter.delete('/doctors/:id',get.deleteDoctor)
doctorRouter.get('/doctors/:id',get.getDoctorById)
doctorRouter.post('/doctor/login',get.loginDoctors)
doctorRouter.get('/doctor/doctordashboard',auth,get.doctordashboard)

module.exports=doctorRouter