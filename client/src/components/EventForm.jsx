import { useState } from 'react'
import '../App.css'

function EventForm({eventList, setEventList }) {
  const [title, setTitle] = useState('');
  const [date, setDate] =   useState('');
  const [venue, setVenue] = useState('');

 async function onSubmitHandler(e) {
  e.preventDefault();
  
  const newEvent = {
    title: title,
    date: date,
    venue: venue
  };


    const response = await fetch('http://localhost:3000/events', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newEvent), // body data type must match "Content-Type" header
    });
  
    if(response.ok) {
      console.log(newEvent);
    const res = await response.json(); 
    console.log('here', res);
    setEventList([...eventList, res]);
    }
    setTitle('');
    setDate('');
    setVenue(''); 
  }
  
  function onTitleChangeHandler (e) {
    setTitle(e.target.value);
  }
  function onDateChangeHandler (e) {
    setDate(e.target.value);
  }
  function onVenueChangeHandler (e) {
    setVenue(e.target.value);
  }

  return (
    <div className="form">
      <h2> Create a new event</h2>
    <form onSubmit={onSubmitHandler} >
    <div className="input-group">
      <label>TITLE<br></br></label>
      <input name="title" value={title} onChange={onTitleChangeHandler} placeholder="Insert a title..." required />
     </div>
     <div className="input-group">
      <label>DATE<br></br></label>
      <input name="date" type="datetime-local" value={date} onChange={onDateChangeHandler}   required />
      </div>
      <div className="input-group">
      <label>VENUE<br></br></label>
      <input name="venue" value={venue} onChange={onVenueChangeHandler} placeholder="Insert a venue..." required />
      </div>
      <button>Create</button>
    </form>
  </div>
    )
  }

  export default EventForm;