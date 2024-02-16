const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main () {
  await mongoose.connect('mongodb://localhost:27017/EventDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const eventSchema = new mongoose.Schema({
  // _id: String,
  title: String,
  date: Date, 
  venue: String
});
const Event = mongoose.model('Event', eventSchema);


const getEvents = async () => {
  const events = await Event.find();
  console.log(events);
  return events;
};

const postEvents = async (eventData) => {
  const event = new Event(eventData);
  await event.save();
  console.log('event created:', event);
  return event; 
};

module.exports = { getEvents , postEvents };