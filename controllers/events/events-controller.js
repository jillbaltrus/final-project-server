import * as eventsDao from "./events-dao.js";

const EventsController = (app) => {
  app.post("/api/events", createEvent);
  app.get("/api/events", findEvents);
  app.get("/api/events/:eid", findEventById);
  app.delete("/api/events/:eid", deleteEventById);
};

const createEvent = async (req, res) => {
  if (!req.body.title) {
    res.status(409).send("missing required field: title");
    return;
  }
  if (!req.body.startDateTime) {
    res.status(409).send("missing required field: startDateTime");
    return;
  }
  if (!req.body.endDateTime) {
    res.status(409).send("missing required field: endDateTime");
    return;
  }
  const newEvent = await eventsDao.createEvent(req.body);
  res.json(newEvent);
};

const findEvents = async (req, res) => {
  const events = await eventsDao.findAllEvents();
  res.json(events);
};

const findEventById = async (req, res) => {
  const eventId = req.params.eid;
  const event = await eventsDao.findEventById(eventId);
  res.json(event);
};

const deleteEventById = async (req, res) => {
    const eventIdToDelete = req.params.eid;
    const status = await eventsDao.deleteEvent(eventIdToDelete);
    res.json(status);
  };

export default EventsController;
