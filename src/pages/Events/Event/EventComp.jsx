import { useParams } from 'react-router-dom';
import { DUMMY_DATA_EVENTS } from '../../../data/events';
import { EventCompStyled } from './EventComp-styled';
import { dtf } from '../../../utils/dtFormatter';
import { useSelector } from 'react-redux';

function EventComp() {
  const { eventId } = useParams();
  const { selectedPost } = useSelector((state) => state.post);
  const event = DUMMY_DATA_EVENTS.find((event) => event.id === +eventId);

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <EventCompStyled>
      <div className="pane left-pane">
        <div className="event-img-frame">
          <img
            src="https://placehold.co/400"
            alt="Placeholder img"
            className="event-img"
          />
        </div>
        <aside className="event-date-url">
          <p className="event-date">Date & Time: {dtf(event?.date)}</p>
          <p className="event-url">
            URL:{' '}
            <a
              className="event-url-link"
              target="_blank"
              href="https://uskudar-edu-tr.zoom.us/j/3465020767?omn=93164526516"
            >
              https://uskudar-edu-tr.zoom.us/j/3465020767?omn=93164526516
            </a>
          </p>
        </aside>
      </div>
      <div className="pane right-pane">
        <h2 className="event-title">{selectedPost?.club_name}</h2>
        <h4
          className="event-club"
          style={{
            textTransform: 'capitalize',
          }}
        >
          {selectedPost?.category}
        </h4>
        <p className="event-description">{selectedPost?.content}</p>
      </div>
    </EventCompStyled>
  );
}

export default EventComp;
