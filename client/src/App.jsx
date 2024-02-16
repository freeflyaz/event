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
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const eventListFilter = eventList.filter(event => new Date(event.date) >= new Date())
  


  return (
    <div>
  <div className="nav">
    <h1>Codeworks eventing</h1>
  </div>
<div className="app">
  <div className="list" id="list">
    {eventListFilter.length && eventListFilter.map((event, index) => ( 
      <EventItem  key={event._id} event={event} 
    style={index === 0 ? { backgroundColor: '#FE7B10', color: 'white'} : {}}
    />
    ))}
  </div>
    <EventForm setEventList={setEventList} eventList={eventListFilter} sortEventsByDate={sortEventsByDate}/>
</div>
</div>
  )
}

export default App
