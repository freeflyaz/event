const model  = require('./model');

const  getEvents = async (req, res) => {
    const sendBack = await model.getEvents();
    res.send(sendBack);
  };

  const  postEvents = async (req, res) => {
    const eventData = req.body;
    const event = await model.postEvents(eventData);
    res.status(201).json(event);
  };

  module.exports = {getEvents, postEvents};