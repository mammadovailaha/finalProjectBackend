import mongoose from "mongoose";

const intentSchema = new mongoose.Schema({
  intent: { type: String, required: true },
  response: { type: String, required: true },
  link: { type: String, default: null }
});

export default mongoose.model("Intent", intentSchema);
