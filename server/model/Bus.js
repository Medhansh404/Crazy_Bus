import mongoose from "mongoose";
const Bus = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cityfrom: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  seats: {
    type: [String]
  }
});

export default mongoose.model("Bus", Bus);
