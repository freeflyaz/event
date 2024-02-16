import { useState } from 'react'
import '../App.css'

function EventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] =   useState('');
  const [venue, setVenue] = useState('');

  function onSubmitHandler(e) {
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
    <form onSubmit={onSubmitHandler}>
      <label>TITLE</label>
      <input name="title" value={title} onChange={onTitleChangeHandler} placeholder="Insert a title..." />
      <label>DATE</label>
      <input name="date" type="datetime-local" value={date} onChange={onDateChangeHandler}   />
      <label>VENUE</label>
      <input name="venue" value={venue} onChange={onVenueChangeHandler} placeholder="Insert a venue..." />
      <button>Create</button>
    </form>
  </div>
    )
  }

  export default EventForm;