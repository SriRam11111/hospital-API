const express = require("express")
const router = new express.Router()
const app = express()


const Doctor = require('../models/doctormodels')
const Patient = require('../models/patientmodel')




router.post('/doctors', (req, res) => {
  // console.log("post doctors")
  console.log("body doctors",req.body)
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

//create new patient
router.post('/patients', (req, res) => {
  // console.log("post patients")
  
  const newPatient = new Patient(req.body);
  newPatient.save((err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
});

// Get all doctors
router.get('/doctors', (req, res) => {
  // console.log("get doctors")
  Doctor.find((err, doctors) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctors);
    }
  });
});

//get all patients
router.get('/patients', (req, res) => {
  // console.log("get patients")
  Patient.find((err, patients) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patients);
    }
  });
});


// Get a specific doctor by ID
router.get('/doctors/:id', (req, res) => {
  // console.log("get doctor by id")
  Doctor.findById(req.params.id, (err, doctor) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctor);
    }
  });
});

// Get a specific patient by ID
router.get('/patients/:id', (req, res) => {
  // console.log("get patients by id")
  // Patient.findById(req.params.id, (err, patient) => {
  Patient.findOne({ _id: req.params.id }, (err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
});

// Update a specific doctor by ID
//no need for , { new: true } if exist also no problem                 npm run server
router.put('/doctors/:id', (req, res) => {
  // console.log("update doctor by id")
  // console.log("req.params.id==",req.params.id)
  // console.log("req.body==",req.body)
  Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doctor) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doctor);
    }
  });
});

//update a specific patient by ID
router.put('/patients/:id', (req, res) => {
  // console.log("update PARIENT by id")
  Patient.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
});

// Delete a specific doctor by ID
router.delete('/doctors/:id', (req, res) => {
  // console.log("delete doctor by id")
  Doctor.findByIdAndRemove(req.params.id, (err, doctor) => {
    if (err) {
      res.send(err);2
    } else {
      res.json(doctor);
    }
  });
});

// Delete a specific patient by ID
router.delete('/patients/:id', (req, res) => {
  // console.log("delete patient by id")
  Patient.findByIdAndRemove(req.params.id, (err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
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

module.exports=router