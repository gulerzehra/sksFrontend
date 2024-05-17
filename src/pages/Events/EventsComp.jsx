import { Events, InnerContainer } from './EventsComp-styled';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchData } from '../../utils/searchData';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { HiFunnel, HiCalendarDays } from 'react-icons/hi2';
import SearchComp from '../../components/Search/SearchComp';
import CalendarComp from '../../components/Calendar/CalendarComp';
import { Calendar as WeeklyCalendr, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { dtf } from '../../utils/dtFormatter';
import { useSelector } from 'react-redux';
import { getApprovedPosts } from '../../data/data';
import { store } from '../../data/store';
import { fetchPosts, selectPost } from '../../data/postSlice';

const localizer = momentLocalizer(moment);

function FilterOptionComp({ name, selectedCategories, setSelectedCategories }) {
  function onChangeHandler(e) {
    const categoryName = e.target.name.split('-')[0];
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, categoryName]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== categoryName),
      );
    }
  }

  return (
    <div className="filter-option">
      <label htmlFor={name} className="filter-option-label">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={onChangeHandler}
          checked={selectedCategories.includes(name.split('-')[0])}
        />
        {name.split('-')[0]}
      </label>
    </div>
  );
}

FilterOptionComp.propTypes = {
  name: PropTypes.string.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
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
            <time dateTime={date}>{dtf(date)}</time>
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
  const [selectedCategories, setSelectedCategories] = useState([]); // ['Health', 'Gaming']
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const popupRef = useRef(null);
  useOutsideClick(popupRef, () => setShowPopup(false));

  useEffect(() => {
    setIsDateSelected(false);
  }, [selectedDate]);

  let selectedDateText;

  if (selectedDate) {
    selectedDateText = selectedDate.toDateString();
  } else {
    selectedDateText = 'Select Date';
  }

  const filteredEvents = events.filter((event) => {
    const isCategoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories
        .map((category) => category.toLowerCase())
        .includes(event.tag);

    const isDateMatch =
      !selectedDate ||
      new Date(event.created_at).toDateString() === selectedDate.toDateString();

    return isCategoryMatch && isDateMatch;
  });

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
                <div
                  className="popup-header-calendar"
                  onClick={() =>
                    setIsDateSelected((isDateSelected) => !isDateSelected)
                  }
                >
                  <HiCalendarDays className="calendar-icon" />
                  <p className="calendar-text">{selectedDateText}</p>
                </div>
              </div>
              <div className="popup-content">
                <FilterOptionComp
                  name={`Sports-${title.split(' ')[0]}`}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
                <FilterOptionComp
                  name={`Gaming-${title.split(' ')[0]}`}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
                <FilterOptionComp
                  name={`Travel-${title.split(' ')[0]}`}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
                <FilterOptionComp
                  name={`Technology-${title.split(' ')[0]}`}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
                <FilterOptionComp
                  name={`Psychology-${title.split(' ')[0]}`}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
                <FilterOptionComp
                  name={`Music-${title.split(' ')[0]}`}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
                <FilterOptionComp
                  name={`Media-${title.split(' ')[0]}`}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
              </div>
              {isDateSelected && (
                <CalendarComp
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              )}
            </div>
          )}
        </button>
      </div>

      <Events>
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            onClick={() => {
              store.dispatch(selectPost(event));
            }}
          >
            <article className="event" key={event.id}>
              <div className="event-img-frame">
                <img
                  src="https://placehold.co/300x200"
                  alt={title}
                  className="event-img"
                />
              </div>
              <div className="event-content">
                <h2 className="event-title">{event.content}</h2>
                <address className="event-address">
                  Uskudar University | Merkez
                </address>
                <p className="event-datetime">
                  <time dateTime={event.created_at}>
                    {dtf(event.created_at)}
                  </time>
                </p>
              </div>
            </article>
          </Link>
        ))}
      </Events>

      {children}
    </>
  );
}

EventsLineComp.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  children: PropTypes.node,
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
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    async function postsHandler() {
      const response = await getApprovedPosts();
      store.dispatch(fetchPosts(response));
    }
    postsHandler();
  }, []);

  /* Example posts data
  [
    {
        "id": 10,
        "tag": "sports",
        "category": "announcement",
        "author_id": 2,
        "author_name": "test2",
        "club_id": 2,
        "club_name": "Araba Klubu",
        "content": "Exciting news for our sports fans!",
        "created_at": "2024-04-25T21:29:50.970949Z",
        "status": "approved",
        "rejection_reason": ""
    },
    {
        "id": 11,
        "tag": "sports",
        "category": "announcement",
        "author_id": 2,
        "author_name": "test2",
        "club_id": 2,
        "club_name": "Araba Klubu",
        "content": "New Exciting news for our sports fans!",
        "created_at": "2024-04-29T14:51:46.093828Z",
        "status": "approved",
        "rejection_reason": ""
    }
]
  */

  const filteredData = searchData(posts, searchQuery, 'content');
  // const [officialEvents, clubEvents] = filteredData.reduce(
  //   (acc, event) => {
  //     if (event.type === 'official') {
  //       acc[0].push(event);
  //     } else if (event.type === 'club') {
  //       acc[1].push(event);
  //     } else {
  //       console.error('Invalid event type:', event.type);
  //     }
  //     return acc;
  //   },
  //   [[], []],
  // );

  useDocumentTitle('Events');

  function onChangeHandler(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <InnerContainer>
      {/* <EventsLineComp title="All Events" events={filteredData} searchQuery={searchQuery} /> */}
      <SearchComp searchQuery={searchQuery} onChangeHandler={onChangeHandler} />
      {/* <OfficialEventsComp events={officialEvents} searchQuery={searchQuery} /> */}
      <EventsLineComp
        title="All Events"
        events={filteredData}
        searchQuery={searchQuery}
      />
      <h1 className="weekly-title">Weekly Calendar</h1>
      <WeeklyCalendr
        localizer={localizer}
        defaultView="week"
        events={filteredData.map((event) => ({
          title: event.content,
          start: new Date(event.created_at),
          // derived from event.created_at and add 2 hr
          end: new Date(new Date(event.created_at).setHours(2)),
        }))}
        // events={DUMMY_DATA.map((event) => ({
        //   title: event.title,
        //   start: new Date(event.date),
        //   end: new Date(event.endDate),
        // }))}
        startAccessor="start"
        endAccessor="end"
        style={{ width: '500', margin: '50px auto' }}
      />
      {/* <ClubEventsComp events={clubEvents} searchQuery={searchQuery} /> */}
    </InnerContainer>
  );
}

export default EventsComp;
