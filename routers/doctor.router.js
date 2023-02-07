const express = require('express')
const Doctor = require('../models/doctormodels');
const Patient = require('../models/patientmodel');
// const auth = require('../middleware/auth')
const router = new express.Router()



// Create a new doctor
router.post('/doctors', (req, res) => {
  console.log("post doctors")
  const doc = req.body
  const newDoctor=new Doctor(doc);
  newDoctor.save((err, doctor) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctor);
    }
  });
});

// Get all doctors
router.get('/doctors', (req, res) => {
  console.log("get doctors")
  Doctor.find((err, doctors) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctors);
    }
  });
});

// Get a specific doctor by ID
router.get('/doctors/:id', (req, res) => {
  console.log("get doctor by id")
  Doctor.findById(req.params.id, (err, doctor) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctor);
    }
  });
});

// Update a specific doctor by ID
//no need for , { new: true } if exist also no problem                 npm run server
router.put('/doctors/:id', (req, res) => {
  console.log("update doctor by id")
  console.log("req.params.id==",req.params.id)
  console.log("req.body==",req.body)
  Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doctor) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctor);
    }
  });
});

// Delete a specific doctor by ID
router.delete('/doctors/:id', (req, res) => {
  console.log("delete doctor by id")
  Doctor.findByIdAndRemove(req.params.id, (err, doctor) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctor);
    }
  });
});

//getting all patients under a doctor
router.get('/doctors/:doctorId/patients', async (req, res) => {
  try {
    const patients = await Patient.find({ doctor: req.params.doctorId });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router