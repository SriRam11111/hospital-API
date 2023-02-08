const express = require("express")
const doctorRouter = new express.Router()
const get = require("../controllers/doctorControllers")


doctorRouter.get('/doctors',get.getAllDoctors)
doctorRouter.post('/doctors',get.addDoctors)
doctorRouter.put('/doctors/:id',get.updateDoctors)
doctorRouter.delete('/doctors/:id',get.deleteDoctor)
doctorRouter.get('/doctors/:id',get.getDoctorById)

module.exports=doctorRouter