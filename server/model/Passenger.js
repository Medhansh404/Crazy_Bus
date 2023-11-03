import mongoose from "mongoose";
const passenger = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

});

export default mongoose.model("Passenger", passenger);
