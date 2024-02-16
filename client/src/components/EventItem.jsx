import '../App.css'


function EventItem({event}) {

  return (
    <div>
   <div>{event.title}</div>
   <div>{event.date}</div>
   <div>{event.venue}</div>
   </div>
    )
  }

  export default EventItem;