import '../App.css'


function EventItem({event}) {

  return (
<div className="item">
  <div className="date-left-orange">Jan 24</div>
  <div className="text">
   <div><b>{event.title}</b></div>
   <div>{event.date}</div>
   <div>{event.venue}</div>
   </div>
</div>
)
  }

  export default EventItem;