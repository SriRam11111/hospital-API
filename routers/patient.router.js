const express = require('express')
const Patient = require('../models/patientmodel');
// const auth = require('../middleware/auth')
const router = new express.Router()






//create new patient
router.post('/patients', (req, res) => {
  console.log("post patients")
  // console.log("post patients",req.body)
  const newPatient = new Patient(req.body);
  newPatient.save((err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
});

//get all patients
router.get('/patients', (req, res) => {
  console.log("get patients")
  Patient.find((err, patients) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patients);
    }
  });
});

// Get a specific patient by ID
router.get('/patients/:id', (req, res) => {
  console.log("get patients by id")
  Patient.findById(req.params.id, (err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
});

//update a specific patient by ID
router.put('/patients/:id', (req, res) => {
  console.log("update PARIENT by id")
  Patient.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
});

// Delete a specific patient by ID
router.delete('/patients/:id', (req, res) => {
  console.log("delete patient by id")
  Patient.findByIdAndRemove(req.params.id, (err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
});
module.exports = router