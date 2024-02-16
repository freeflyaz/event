import { useState } from 'react'
import '../App.css'

function EventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] =   useState('');
  const [venue, setVenue] = useState('');

 async function onSubmitHandler(e) {
    const topicData = {
      title: topic
    }
    const response = await fetch('http://localhost:300/evets', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(topicData), // body data type must match "Content-Type" header
    });
  
    if(response.ok) {
    const res = await response.json(); // created by fetch .json /// must await ///
      setTopicList([...topicList, res]);
    }
  setTopic(''); 
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
    <div className="input-group">
      <label>TITLE<br></br></label>
      <input name="title" value={title} onChange={onTitleChangeHandler} placeholder="Insert a title..." />
     </div>
     <div className="input-group">
      <label>DATE<br></br></label>
      <input name="date" type="datetime-local" value={date} onChange={onDateChangeHandler}   />
      </div>
      <div className="input-group">
      <label>VENUE<br></br></label>
      <input name="venue" value={venue} onChange={onVenueChangeHandler} placeholder="Insert a venue..." />
      </div>
      <button>Create</button>
    </form>
  </div>
    )
  }

  export default EventForm;