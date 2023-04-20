import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import UserController from "./controllers/users/user-controller.js";
import EventsController from "./controllers/events/events-controller.js";
import RsvpsController from "./controllers/rsvps/rsvps-controller.js";

// TODO: declare DB_TH_CONNECTION_STRING in bash profile once we know what it is
const CONNECTION_STRING =
  process.env.DB_TH_CONNECTION_STRING || "mongodb://127.0.0.1:27017/turtlehub";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);

app.listen(process.env.PORT || 4000);
UserController(app);
EventsController(app);
RsvpsController(app);
