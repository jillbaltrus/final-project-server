import mongoose from "mongoose";
import rsvpsSchema from "./rsvps-schema.js";

const rsvpsModel = mongoose.model("rsvps", rsvpsSchema);

export default rsvpsModel;
