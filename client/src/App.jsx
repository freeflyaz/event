import EventForm from './components/EventForm';
import EventItem from './components/EventItem';
// import EventList from './components/EventList';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ eventList, setEventList ] = useState([]);

  useEffect (()=>{
  const  getEvents = async () => {
    const response = await fetch("http://localhost:3000/events");
    const event = await response.json();
    console.log('from-db: ', event);
    setEventList(event);
  }   
getEvents();
  },[]);


  return (
<div className="app">
  <div className="list">
    {eventList.length && eventList.map((event) => ( 
    <EventItem  key={event._id} event={event} />
    ))}
  </div>
    <EventForm setEventList={setEventList} eventList={eventList}/>
</div>
  )
}

export default App
