const jwt = require("jsonwebtoken")
const authentication = (req,res,next) => {
    try{
        //  console.log("req.headers",req.headers)
        let token = req.headers.authorization
        // token = req.header('authorization');
        
        // console.log("token for auth",token)
        if(token){
            token = token
            let doctor = jwt.verify(token,"SECRET_KEY")
            req.doctorId = doctor.id
        }
        else{
            res.status(401).json({message:"user token not generated"})
        }
        next()
    }
    catch(err){
        console.log(err)
         res.status(401).json({message:"unauthorized user err"})
    }
}

module.exports = authentication


