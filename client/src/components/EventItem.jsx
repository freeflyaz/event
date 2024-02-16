import '../App.css'


function EventItem({event, style }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short', 
    day: '2-digit'  
  });

  return (
    <div className="item" style={style}>
  <div className="date-left-orange">{formattedDate}</div>
  <div className="text">
   <div><b>{event.title}</b></div>
   <div>{event.date}</div>
   <div>{event.venue}</div>
   </div>
</div>
)
  }

  export default EventItem;