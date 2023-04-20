import mongoose from "mongoose";
const rsvpsSchema = new mongoose.Schema(
  {
    user: {type: String, required: true},
    event: {type: String, required: true},
  },
  { collection: "rsvps" }
);

export default rsvpsSchema;