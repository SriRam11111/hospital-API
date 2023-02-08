const Patient = require('../models/patientmodel')
const getAllPatients = async (req,res,next) => {
    let patients;
    try{
        patients = await Patient.find()
        console.log("get doctors")
        
    }
    catch(err){
        console.log(err)
    }
    if(!patients){
        return res.status(404).json({message:"no patient found"})
    }
    return res.status(200).json({patients})
}

const addPatient= async (req,res,next) => {
    let patient = req.body
    let existingpatient
    try{
     existingpatient = await Patient.findOne({name:patient.name})
    }
    catch(err){
        console.log(err)
    }
    if(existingpatient){
        return res.status(400).json({message:"already patient  with same name present"})
    }
    patient = new Patient(patient)
     try{
        await patient.save()
     }
     catch(err){
        return console.log(err)
     }
     return res.status(201).json({patient})
}

const updatePatient = async(req,res,next)=>{
    const id = req.params.id
    let patient
    try{
        patient = await Patient.findByIdAndUpdate(id,req.body)
    }
    catch(err){
        return console.log(err)
    }
    if(!id){
        return res.status(500).json({message:"unable to find id"})
    }
    else if(!patient){
        return res.status(500).json({message:"unable to update"})
    }
    patient = await Patient.findOne({_id:id})
    res.status(200).json({patient})
}


const deletePatient = async(req,res,next)=>{
    const id = req.params.id
    let patient
    try{
        patient = await Patient.findByIdAndRemove(id)
    }
    catch(err){
        return console.log(err)
    }
    if (!patient){
        return res.status(404).json({message:`no delete is possible may be patient with id : ${id} not exist `})
    }
    return res.status(200).json({message:"successfully deleted"})
}

const getPatientById = async (req,res,next) => {
    const id=req.params.id
    let patient 
    try{
        patient = await Patient.findById(id)
    }
    catch(err){
        return console.log(err)
    }
    if(!patient){
        return res.status(404).json ({message :`no doctor found with id : ${id}`})
    }
    return res.status(200).json({patient})
}


module.exports={getAllPatients , addPatient , updatePatient , deletePatient ,getPatientById}