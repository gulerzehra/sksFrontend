import { Clubs, ClubsAlt, InnerContainer } from './ClubsComp-styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import PropTypes from 'prop-types';
import { searchData } from '../../utils/searchData';
import { DUMMY_DATA_CLUBS as DUMMY_DATA } from '../../data/clubs';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="search-icon w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function ClubComp({ id, name, img, events }) {
  return (
    <Link to={`/clubs/${id}`}>
      <div className="club">
        <div className="club-img-frame">
          <img className="club-img" src={img} alt={name} />
        </div>
        <div className="club-content">
          <h2 className="club-title">{name}</h2>
          <p className="club-events-tip">Events</p>
          <p className="club-events">{events}</p>
        </div>
      </div>
    </Link>
  );
}

ClubComp.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  events: PropTypes.string.isRequired,
};

function ClubCompAlt({ id, name, img, president, mail, description }) {
  function mailHandler(mail) {
    if (!mail) {
      return '-';
    }
    if (mail.length < 30) {
      return mail;
    }
    return mail.slice(0, mail.indexOf('@'));
  }

  return (
    <div className="club-container">
      <div className="club">
        <div className="club-side">
          <Link to={`/clubs/${id}`}>
            <div className="club-shadow"></div>
            <div className="club-img-frame">
              <img className="club-img" src={img} alt={name} />
            </div>
          </Link>
        </div>
        <div className="club-content">
          <h2 className="club-content-title">{name}</h2>
          <p className="club-content-description">{description}</p>
          <div className="club-content-contact">
            <div className="contact-president">
              <div className="contact-president-title">President</div>
              <div className="contact-president-name">{president || '-'}</div>
            </div>
            <div className="contact-mail">
              <div className="contact-president-title">Mail</div>
              <div className="contact-president-name">{mailHandler(mail)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ClubCompAlt.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  president: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function ClubsComp() {
  const query = useQuery();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = searchData(DUMMY_DATA, searchQuery);

  useDocumentTitle('Clubs');

  function onChangeHandler(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <InnerContainer>
      <h1 className="title">Clubs</h1>
      <div className="search-frame">
        <SearchIcon />
        <input
          className="search"
          type="text"
          name="search"
          id="search"
          placeholder="Search Club"
          value={searchQuery}
          onChange={onChangeHandler}
        />
      </div>
      {query.get('view') === 'alt' ? (
        <ClubsAlt>
          {filteredData.map((club) => (
            <ClubCompAlt
              key={club.id}
              id={club.id}
              name={club.name}
              img={club.img}
              president={club.president}
              mail={club.mail}
              description={club.description}
            />
          ))}
        </ClubsAlt>
      ) : (
        <Clubs>
          {filteredData.map((club) => (
            <ClubComp
              key={club.id}
              id={club.id}
              name={club.name}
              img={club.img}
              events={club.events}
            />
          ))}
        </Clubs>
      )}
    </InnerContainer>
  );
}

export default ClubsComp;
