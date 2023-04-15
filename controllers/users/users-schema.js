import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: String,
    birthday: Date,
    bio: String,
    email: String,
    phone: String,
    admin: { type: Boolean, default: false },
    private: Boolean,
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

export default usersSchema;
