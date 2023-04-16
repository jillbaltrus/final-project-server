import mongoose from "mongoose";

const eventsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    location: String,
    description: String,
    points: {
      type: [
        { enum: ["ACADEMIC", "DEI", "GREEK", "RISK", "SISTERHOOD", "CS"] },
      ],
      default: [],
    },
    mandatory: { type: Boolean, default: false },
    communityServiceHours: { type: Number, default: 0 },
    limitSignUps: { type: Boolean, default: false },
    maxParticipants: Number,
    createdAt: { type: Date, default: Date.now },
    createdBy: { ref: "usersModel", type: mongoose.Schema.Types.ObjectId },
  },
  { collection: "events" }
);

export default eventsSchema;
