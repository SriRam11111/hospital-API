const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor"
  }
});
//changes are done

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
