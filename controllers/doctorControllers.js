const Doctor = require('../models/doctormodels')
const Patient = require('../models/patientmodel')
const jwt=require('jsonwebtoken')



const addDoctors = async(req,res,next) => {
    let doctor =req.body
    console.log(doctor)
    // console.log(doctor.name)
    let existingdoctor
    try{
     existingdoctor = await Doctor.findOne({name:doctor.name})
    }
    catch(err){
        console.log(err)
    }
    if(existingdoctor){
        return res.status(400).json({message:"already doctor with same name present"})
    }

     doctor = new Doctor(doctor)
     try{
        await doctor.save()
     }
     catch(err){
        return console.log(err)
     }
     return res.status(201).json({doctor})
}
const loginDoctors=async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        let exist = await Doctor.findOne({email});
        if(!exist) {
            return res.status(400).send('User Not Found');
        }
        if(exist.password !== password) {
            return res.status(400).send('Invalid credentials');
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
          (err,token) =>{
              if (err) throw err;
              return res.json({token})
          }  
            )

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
}
const doctordashboard= async (req,res) =>{
    try{
        let exist = await Doctor.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
}

const getAllDoctors = async (req,res,next) => {
  let doctors;
  try{
      doctors = await Doctor.find()
      console.log("get updated doctors")
      
  }
  catch(err){
      console.log(err)
  }
  if(!doctors){
      return res.status(404).json({message:"no doctor found"})
  }
  return res.status(200).json({doctors})
}

const updateDoctors = async(req,res,next)=>{
    const id = req.params.id
    let doctor
    try{
        doctor = await Doctor.findByIdAndUpdate(id,req.body)
    }
    catch(err){
        return console.log(err)
    }
    if(!id){
        return res.status(500).json({message:"unable to find id"})
    }
    else if(!doctor){
        return res.status(500).json({message:"unable to update"})
    }
    doctor = await Doctor.findOne({_id:id})
    res.status(200).json({doctor})
}

const deleteDoctor = async(req,res,next)=>{
    const id = req.params.id
    console.log(id)
    let doctor
    try{
        doctor = await Doctor.findByIdAndRemove(id)
    }
    catch(err){
        return console.log(err)
    }
    if (!doctor){
        return res.status(404).json({message:"no delete is possible"})
    }
    return res.status(200).json({message:"successfully deleted"})
}

const getDoctorById = async (req,res,next) => {
    const id=req.params.id
    let doctor 
    try{
        doctor = await Doctor.findById(id)
    }
    catch(err){
        return console.log(err)
    }
    if(!doctor){
        return res.status(404).json ({message :`no doctor found with id : ${id}`})
    }
    return res.status(200).json({doctor})
}

module.exports={getAllDoctors , getDoctorById ,addDoctors ,updateDoctors,deleteDoctor,loginDoctors,doctordashboard}