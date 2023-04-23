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

export const deleteRsvp = (eid, uid) => rsvpsModel.deleteOne({ event: eid, user: uid });

export const deleteRsvpsForEvent = (eid) => rsvpsModel.deleteMany({ event: eid });

export const createRsvp = (rsvp) => rsvpsModel.create(rsvp);
