import '../App.css'


function EventItem({event, style }) {

  return (
    <div className="item" style={style}>
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