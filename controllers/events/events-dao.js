import eventsModel from "./events-model.js";

export const findAllEvents = () => eventsModel.find();

export const findEventById = (eid) => eventsModel.findById(eid);

export const createEvent = (event) => eventsModel.create(event);

export const deleteEvent = (eid) => eventsModel.deleteOne({ _id: eid });
