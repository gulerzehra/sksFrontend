import { Events, InnerContainer } from './EventsComp-styled';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchData } from '../../utils/searchData';
import { DUMMY_DATA_EVENTS as DUMMY_DATA } from '../../data/events';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { HiFunnel, HiCalendarDays } from 'react-icons/hi2';
import SearchComp from '../../components/Search/SearchComp';

function FilterOptionComp({ name }) {
  return (
    <div className="filter-option">
      <label htmlFor={name} className="filter-option-label">
        <input type="checkbox" name={name} id={name} />
        {name.split('-')[0]}
      </label>
    </div>
  );
}

FilterOptionComp.propTypes = {
  name: PropTypes.string.isRequired,
};

function EventComp({ id, title, address, date, img }) {
  return (
    <Link to={`/events/${id}`}>
      <article className="event" key={id}>
        <div className="event-img-frame">
          <img src={img} alt={title} className="event-img" />
        </div>
        <div className="event-content">
          <h2 className="event-title">{title}</h2>
          <address className="event-address">{address}</address>
          <p className="event-datetime">
            <time dateTime="2022-04-15T10:00:00">{date}</time>
          </p>
        </div>
      </article>
    </Link>
  );
}

EventComp.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

function EventsLineComp({ title, events, children }) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  useOutsideClick(popupRef, () => setShowPopup(false));

  return (
    <>
      <div className="title-line">
        <h1 className="title">{title}</h1>
        <button
          className="filter-btn"
          onClick={() => setShowPopup((showPopup) => !showPopup)}
        >
          <HiFunnel className="filter-icon" /> Filter
          {showPopup && (
            <div
              className="filter-popup"
              onClick={(e) => e.stopPropagation()}
              ref={popupRef}
            >
              <div className="popup-header">
                <h2 className="popup-header-title">Categories</h2>
                <div className="popup-header-calendar">
                  <HiCalendarDays className="calendar-icon" />
                  <p className="calendar-text">18 march, 2024</p>
                </div>
              </div>
              <div className="popup-content">
                <FilterOptionComp name={`Health-${title.split(' ')[0]}`} />
                <FilterOptionComp name={`Gaming-${title.split(' ')[0]}`} />
                <FilterOptionComp name={`Travel-${title.split(' ')[0]}`} />
                <FilterOptionComp name={`Technology-${title.split(' ')[0]}`} />
                <FilterOptionComp name={`Psychology-${title.split(' ')[0]}`} />
                <FilterOptionComp name={`Music-${title.split(' ')[0]}`} />
                <FilterOptionComp name={`Media-${title.split(' ')[0]}`} />
              </div>
            </div>
          )}
        </button>
      </div>

      <Events>
        {events.map((event) => (
          <EventComp
            key={event.id}
            id={event.id}
            title={event.title}
            address={event.address}
            date={event.date}
            img={event.img}
          />
        ))}
      </Events>

      {children}
    </>
  );
}

EventsLineComp.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

function OfficialEventsComp({ events, searchQuery }) {
  const [officialEventCount, setOfficialEventCount] = useState(3);

  function loadMoreHandler() {
    if (officialEventCount >= events.length) return;
    setOfficialEventCount((prevCount) => prevCount + 3);
  }

  return (
    <EventsLineComp
      title="Official Events"
      events={events.slice(0, officialEventCount)}
      searchQuery={searchQuery}
    >
      {officialEventCount < events.length && (
        <div className="button-aligner">
          <button className="load-more" onClick={loadMoreHandler}>
            Load More
          </button>
        </div>
      )}
    </EventsLineComp>
  );
}

OfficialEventsComp.propTypes = {
  events: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

function ClubEventsComp({ events, searchQuery }) {
  return (
    <EventsLineComp
      title="Clubs Events"
      events={events}
      searchQuery={searchQuery}
    />
  );
}

ClubEventsComp.propTypes = {
  events: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

function EventsComp() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = searchData(DUMMY_DATA, searchQuery, 'title');
  const [officialEvents, clubEvents] = filteredData.reduce(
    (acc, event) => {
      if (event.type === 'official') {
        acc[0].push(event);
      } else if (event.type === 'club') {
        acc[1].push(event);
      } else {
        console.error('Invalid event type:', event.type);
      }
      return acc;
    },
    [[], []],
  );

  useDocumentTitle('Events');

  function onChangeHandler(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <InnerContainer>
      <SearchComp searchQuery={searchQuery} onChangeHandler={onChangeHandler} />
      <OfficialEventsComp events={officialEvents} searchQuery={searchQuery} />
      <ClubEventsComp events={clubEvents} searchQuery={searchQuery} />
    </InnerContainer>
  );
}

export default EventsComp;
