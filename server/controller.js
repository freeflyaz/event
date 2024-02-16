const model  = require('./model');

const  getEvents = async (req, res) => {
 try {
    const sendBack = await model.getEvents();
   res.send(sendBack);
 } catch (error) {
    console.error('Error :', error);
    res.status(500).json({ message: 'Internal server error ' });
}
}
  const  postEvents = async (req, res) => {
try {
    const eventData = req.body;
    const event = await model.postEvents(eventData);
    if (event) {
        res.status(201).json(event);
    }
    else {
        res.status(400).json(event);
    }
} catch (error) {
    console.error('Error :', error);
    res.status(500).json({ message: 'Internal server error ' });
}
  }
  

  module.exports = {getEvents, postEvents};