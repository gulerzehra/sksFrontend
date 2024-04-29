import { Events, InnerContainer } from './EventsComp-styled';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchData } from '../../utils/searchData';
import { DUMMY_DATA_EVENTS as DUMMY_DATA } from '../../data/events';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { HiMagnifyingGlass, HiFunnel, HiCalendarDays } from 'react-icons/hi2';

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

function EventsComp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [officialEventCount, setOfficialEventCount] = useState(3);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const popup1ref = useRef(null);
  const popup2ref = useRef(null);
  useOutsideClick(popup1ref, () => setShowPopup1(false));
  useOutsideClick(popup2ref, () => setShowPopup2(false));
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

  function loadMoreHandler() {
    if (officialEventCount >= officialEvents.length) return;
    setOfficialEventCount((prevCount) => prevCount + 3);
  }

  return (
    <InnerContainer>
      <div className="search-frame">
        <HiMagnifyingGlass className="search-icon" />
        <input
          className="search"
          type="text"
          name="search"
          id="search"
          placeholder="Search Event"
          value={searchQuery}
          onChange={onChangeHandler}
        />
      </div>
      <div className="title-line">
        <h1 className="title">Official Events</h1>
        <button
          className="filter-btn"
          onClick={() => setShowPopup1((showPopup1) => !showPopup1)}
        >
          <HiFunnel className="filter-icon" /> Filter
          {showPopup1 && (
            <div
              className="filter-popup"
              onClick={(e) => e.stopPropagation()}
              ref={popup1ref}
            >
              <div className="popup-header">
                <h2 className="popup-header-title">Categories</h2>
                <div className="popup-header-calendar">
                  <HiCalendarDays className="calendar-icon" />
                  <p className="calendar-text">18 march, 2024</p>
                </div>
              </div>
              <div className="popup-content">
                <div className="filter-option">
                  <label htmlFor="Health-O" className="filter-option-label">
                    <input type="checkbox" name="Health-O" id="Health-O" />
                    Health
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Gaming-O" className="filter-option-label">
                    <input type="checkbox" name="Gaming-O" id="Gaming-O" />
                    Gaming
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Travel-O" className="filter-option-label">
                    <input type="checkbox" name="Travel-O" id="Travel-O" />
                    Travel
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Technology-O" className="filter-option-label">
                    <input
                      type="checkbox"
                      name="Technology"
                      id="Technology-O"
                    />
                    Technology
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Psychology-O" className="filter-option-label">
                    <input
                      type="checkbox"
                      name="Psychology"
                      id="Psychology-O"
                    />
                    Psychology
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Music-O" className="filter-option-label">
                    <input type="checkbox" name="Music-O" id="Music-O" />
                    Music
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Media-O" className="filter-option-label">
                    <input type="checkbox" name="Media-O" id="Media-O" />
                    Media
                  </label>
                </div>
              </div>
            </div>
          )}
        </button>
      </div>

      <Events>
        {officialEvents.slice(0, officialEventCount).map((event) => (
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

      {officialEventCount < officialEvents.length && (
        <div className="button-aligner">
          <button className="load-more" onClick={loadMoreHandler}>
            Load More
          </button>
        </div>
      )}

      <div className="title-line">
        <h1 className="title">Clubs Events</h1>
        <button
          className="filter-btn"
          onClick={() => setShowPopup2((showPopup2) => !showPopup2)}
        >
          <HiFunnel className="filter-icon" /> Filter
          {showPopup2 && (
            <div
              className="filter-popup"
              onClick={(e) => e.stopPropagation()}
              ref={popup2ref}
            >
              <div className="popup-header">
                <h2 className="popup-header-title">Categories</h2>
                <div className="popup-header-calendar">
                  <HiCalendarDays className="calendar-icon" />
                  <p className="calendar-text">18 march, 2024</p>
                </div>
              </div>
              <div className="popup-content">
                <div className="filter-option">
                  <label htmlFor="Health-C" className="filter-option-label">
                    <input type="checkbox" name="Health-C" id="Health-C" />
                    Health
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Gaming-C" className="filter-option-label">
                    <input type="checkbox" name="Gaming-C" id="Gaming-C" />
                    Gaming
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Travel-C" className="filter-option-label">
                    <input type="checkbox" name="Travel-C" id="Travel-C" />
                    Travel
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Technology-C" className="filter-option-label">
                    <input
                      type="checkbox"
                      name="Technology"
                      id="Technology-C"
                    />
                    Technology
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Psychology-C" className="filter-option-label">
                    <input
                      type="checkbox"
                      name="Psychology"
                      id="Psychology-C"
                    />
                    Psychology
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Music-C" className="filter-option-label">
                    <input type="checkbox" name="Music-C" id="Music-C" />
                    Music
                  </label>
                </div>
                <div className="filter-option">
                  <label htmlFor="Media-C" className="filter-option-label">
                    <input type="checkbox" name="Media-C" id="Media-C" />
                    Media
                  </label>
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
      <Events>
        {clubEvents.map((event) => (
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
    </InnerContainer>
  );
}

export default EventsComp;
