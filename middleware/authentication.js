const jwt = require("jsonwebtoken")
const authentication = (req,res,next) => {
    try{
         console.log("req",req)
         console.log("req.headers",req.headers)
        let token = req.headers.authorization
        console.log("token",token)
        if(token){
            token = token
            let doctor = jwt.verify(token,"SECRET_KEY")
            req.doctorId = doctor.id
        }
        else{
            res.status(401).json({message:"unauthorized user token not generated"})
        }
        next()
    }
    catch(err){
        console.log(err)
         res.status(401).json({message:"unauthorized user err"})
    }
}

module.exports = authentication

