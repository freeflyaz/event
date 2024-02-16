import { format } from 'date-fns';
import '../App.css'


function FirstItem({event, style }) {
  
  

  const eventDateFormatted = format(new Date(event.date), "h:mm aaa - MMMM do, yyyy")
  const eventDateFormattedShort = format(new Date(event.date), "do  MMM")

  return (
    <div className="first-item">
      <div className="next">NEXT EVENT</div>
    <div className="event-info"> 
  <div className="first-date-top">{eventDateFormattedShort}</div>
   <div className="event-info-h2">{event.title}</div>
   <div className="first-date">{eventDateFormatted}</div>
   <div className="first-venue">{event.venue}</div>
   </div>
</div>
)
  }

  export default FirstItem;