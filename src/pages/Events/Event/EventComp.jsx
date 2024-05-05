import { useParams } from 'react-router-dom';
import { DUMMY_DATA_EVENTS } from '../../../data/events';
import { EventCompStyled } from './EventComp-styled';

function EventComp() {
  const { eventId } = useParams();
  const event = DUMMY_DATA_EVENTS.find((event) => event.id === +eventId);

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <EventCompStyled>
      <div className="pane left-pane">
        <div className="event-img-frame">
          <img src={event.img} alt="" className="event-img" />
        </div>
        <aside className="event-date-url">
          <p className="event-date">
            Date & Time: <time>{event.date}</time>
          </p>
          <p className="event-url">
            URL:{' '}
            <a className="event-url-link" target="_blank" href={event.url}>
              {event.url}
            </a>
          </p>
        </aside>
      </div>
      <div className="pane right-pane">
        <h2 className="event-title">{event.title}</h2>
        <h4 className="event-club">{event.club}</h4>
        <p className="event-description">{event.description}</p>
      </div>
    </EventCompStyled>
  );
}

export default EventComp;
