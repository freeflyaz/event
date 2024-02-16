const model  = require('./model');

const  getEvents = async (req, res) => {
    const sendBack = await model.getEvents();
    res.send(sendBack);
  };

  module.exports = {getEvents};