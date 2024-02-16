const db = require('./db');

const getEvents = async () => {
    return await db.getEvents();
  };

  const postEvents  = async (eventData) => {
    return await db.postEvents(eventData);
  };
  

  
  module.exports = { getEvents, postEvents };