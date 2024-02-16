import { format } from 'date-fns';
import '../App.css'


function EventItem({event, style }) {
  
  

  const eventDateFormatted = format(new Date(event.date), "h:mm aaa - MMMM do, yyyy")
  const eventDateFormattedShort = format(new Date(event.date), "do MMM")

  return (
    <div className="item" style={style}>
  <div className="date-left-orange">{eventDateFormattedShort}</div>
  <div className="text">
   <div><b>{event.title}</b></div>
   <div>{eventDateFormatted}</div>
   <div>{event.venue}</div>
   </div>
</div>
)
  }

  export default EventItem;