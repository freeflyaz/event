import EventForm from './components/EventForm';
import EventItem from './components/EventItem';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ eventList, setEventList ] = useState([]);

  useEffect (()=>{
  const  getEvents = async () => {
    const response = await fetch("http://localhost:3000/events");
    const event = await response.json();
    console.log('from-db: ', event);
    const sortedEvents = sortEventsByDate(event);
    setEventList(sortedEvents);
  }   
getEvents();
  },[]);

  const sortEventsByDate = (events) => {
    return events.sort((a, b) => new Date(b.date) - new Date(a.date));
   
  };


  return (
<div className="app">
  <div className="list">
    {eventList.length && eventList.map((event, index) => ( 
    <EventItem  key={event._id} event={event} 
    style={index === 0 ? { backgroundColor: 'orange', color: 'white'} : {}}
    />
    ))}
  </div>
    <EventForm setEventList={setEventList} eventList={eventList}/>
</div>
  )
}

export default App
