import { format } from 'date-fns';
import '../App.css'


function EventItem({event, style }) {
  
  

  const eventDateFormatted = format(new Date(event.date), "h:mm aaa - MMMM do, yyyy")
  const eventDateFormattedShort = format(new Date(event.date), "do MMM")

  return (
    <div className="item" style={style}>
  <div className="date-left-orange">{eventDateFormattedShort}</div>
  <div className="text">
   <div><h2>{event.title}</h2></div>
   <div className="date">{eventDateFormatted}</div>
   <div className="venue">{event.venue}</div>
   </div>
</div>
)
  }

  export default EventItem;