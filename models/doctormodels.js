const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      message: "Invalid email format"
    },
    type:String,
    required:true

  },
  password:{
    type:String,
    required:true
  },
  patients: [{
    type: Schema.Types.ObjectId,
    ref: "Patient"
  }]
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
