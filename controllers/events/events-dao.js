import eventsModel from "./events-model.js";

export const findAllEvents = () => eventsModel.find();

export const findEventById = (eid) => eventsModel.findById(eid);

export const createEvent = (event) => eventsModel.create(event);

export const deleteEvent = (eid) => eventsModel.deleteOne({ _id: eid });


// export const findUserByUsername = (username) =>
//   usersModel.findOne({ username });

// export const updateUser = (uid, user) =>
//   usersModel.updateOne({ _id: uid }, user);