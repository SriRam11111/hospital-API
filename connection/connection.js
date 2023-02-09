const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

// MONGODB_URI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2'

MONGODB_URI="mongodb+srv://vijayaram:vijayaram@cluster0.xrrq8qf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true },(err)=>{
    if(err){
    console.log(err)
}
else{
    console.log("successfully DB connected")
}})