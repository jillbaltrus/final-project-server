import mongoose from "mongoose";
import eventsSchema from "./events-schema.js";

const eventsModel = mongoose.model("events", eventsSchema);

export default eventsModel;
