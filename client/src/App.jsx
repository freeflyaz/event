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
    console.log('from-db.data: ', event.data);
    setEventList(event);
  }   
getEvents();
  },[]);


  return (
    <div className="app">
    {console.log('app: ',eventList)}
    {eventList.length && eventList.map((event) => ( 
    <EventItem  key={event} event={event} />
    ))}

    <EventForm setEventList={setEventList} eventList={eventList}/>
    
    </div>
  )
}

export default App
