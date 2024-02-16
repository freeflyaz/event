import EventForm from './components/EventForm';
import EventList from './components/EventList';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ eventList, SetEventList ] = useState(
    [
      
    ]
  );

  useEffect (()=>{
  const  getEvents = async () => {
    const response = await fetch("http://localhost:3000/events");
    const event = await response.json();
    console.log(event);
    SetEventList(event.data);
  }   
getEvents();
  },[]);


  return (
    <div className="app">
    <EventForm setEventList={SetEventList} eventList={eventList}/>
    <EventList eventList={eventList} />
    </div>
  )
}

export default App
