import rsvpsModel from "./rsvps-model.js";

export const findAllRsvps = () => rsvpsModel.find();

export const findRsvpsByEvent = async (eid) => {
    const users = await rsvpsModel.find({ event: eid });
    return users;
}

export const findRsvpsByUser = async (uid) => {
    const events = await rsvpsModel.find({ user: uid });
    return events;
}

export const deleteRsvp = (rid) => rsvpsModel.deleteOne({ _id: rid });

export const createRsvp = (rsvp) => rsvpsModel.create(rsvp);
