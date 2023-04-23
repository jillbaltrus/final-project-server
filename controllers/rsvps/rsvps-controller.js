import * as rsvpsDao from "./rsvps-dao.js";

const RsvpsController = (app) => {
  app.post("/api/rsvps", createRsvp);
  app.get("/api/rsvps", findRsvps);
  app.get("/api/rsvps/events/:uid", findEventsByUser);
  app.get("/api/rsvps/users/:eid", findUsersByEvent);
  app.delete("/api/rsvps/:eid/:uid", deleteRsvpByEidAndUid);
  app.delete("/api/rsvps/:eid", deleteRsvpsByEid);
};

const createRsvp = async (req, res) => {
  if (!req.body.user) {
    res.status(409).send("missing required field: user");
    return;
  }
  if (!req.body.event) {
    res.status(409).send("missing required field: event");
    return;
  }
  const newRsvp = await rsvpsDao.createRsvp(req.body);
  res.json(newRsvp);
};

const findRsvps = async (req, res) => {
  const rsvps = await rsvpsDao.findAllRsvps();
  res.json(rsvps);
};

const findUsersByEvent = async (req, res) => {
  const eventId = req.params.eid;
  const rsvps = await rsvpsDao.findRsvpsByEvent(eventId);
  res.json(rsvps);
};

const findEventsByUser = async (req, res) => {
    const userId = req.params.uid;
    const rsvps = await rsvpsDao.findRsvpsByUser(userId);
    res.json(rsvps);
  };

const deleteRsvpByEidAndUid = async (req, res) => {
    const eidToDelete = req.params.eid;
    const uidToDelete = req.params.uid;
    const status = await rsvpsDao.deleteRsvp(eidToDelete, uidToDelete);
    res.json(status);
  };


const deleteRsvpsByEid = async (req, res) => {
    const eidToDelete = req.params.eid;
    const status = await rsvpsDao.deleteRsvpsForEvent(eidToDelete);
    res.json(status);
  };

export default RsvpsController;
