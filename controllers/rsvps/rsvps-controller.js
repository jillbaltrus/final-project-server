import * as rsvpsDao from "./rsvps-dao.js";

const RsvpsController = (app) => {
  app.post("/api/rsvps", createRsvp);
  app.get("/api/rsvps", findRsvps);
  app.get("/api/rsvps/events/:uid", findEventsByUser);
  app.get("/api/rsvps/users/:eid", findUsersByEvent);
  app.delete("/api/rsvps/:rid", deleteRsvpById);
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

const deleteRsvpById = async (req, res) => {
    const rsvpIdToDelete = req.params.rid;
    const status = await rsvpsDao.deleteRsvp(rsvpIdToDelete);
    res.json(status);
  };

export default RsvpsController;
