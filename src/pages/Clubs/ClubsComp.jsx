import { Clubs, ClubsAlt, InnerContainer } from './ClubsComp-styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import PropTypes from 'prop-types';
import { searchData } from '../../utils/searchData';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import SearchComp from '../../components/Search/SearchComp';
import { useSelector } from 'react-redux';
import { getClub, getClubs } from '../../data/data';
import { store } from '../../data/store';
import { fetchClubs, selectClub } from '../../data/clubSlice';

function ClubComp({ id, name, img, topic, slug }) {
  const { accessToken } = useSelector((state) => state.user);

  return (
    <Link
      to={slug}
      onClick={async () => {
        const response = await getClub(accessToken, id);
        store.dispatch(selectClub(response));
      }}
    >
      <div className="club">
        <div className="club-img-frame">
          <img className="club-img" src={img} alt={name} />
        </div>
        <div className="club-content">
          <h2 className="club-title">{name}</h2>
          <p className="club-events-tip">Events</p>
          <p className="club-events">{topic}</p>
        </div>
      </div>
    </Link>
  );
}

ClubComp.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

function ClubCompAlt({ id, name, img, president, mail, description, slug }) {
  const { accessToken } = useSelector((state) => state.user);

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
          <Link
            to={slug}
            onClick={async () => {
              const response = await getClub(accessToken, id);
              store.dispatch(selectClub(response));
            }}
          >
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
  slug: PropTypes.string.isRequired,
};

function ClubsComp() {
  const query = useQuery();

  const [searchQuery, setSearchQuery] = useState('');
  const [showAltView, setShowAltView] = useState(false);

  const { accessToken } = useSelector((state) => state.user);
  const { clubs } = useSelector((state) => state.club);

  const filteredData = searchData(clubs, searchQuery);

  useDocumentTitle('Clubs');

  function onChangeHandler(e) {
    setSearchQuery(e.target.value);
  }

  function toggleView() {
    setShowAltView((showAltView) => !showAltView);
  }

  useEffect(() => {
    async function clubsHandler() {
      const response = await getClubs(accessToken);
      store.dispatch(fetchClubs(response));
    }
    clubsHandler();
  }, [accessToken]);

  return (
    <InnerContainer>
      <h1 className="title">Clubs</h1>
      <SearchComp searchQuery={searchQuery} onChangeHandler={onChangeHandler} />
      {query.get('view') === 'alt' || showAltView ? (
        <ClubsAlt>
          {filteredData.map((club) => (
            <ClubCompAlt
              key={club.id}
              id={club.id}
              name={club.name}
              img="/placeholders/club.png"
              president="{club.president}"
              mail="{club.mail}"
              description="{club.description}"
              slug={club.slug}
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
              img="/placeholders/club.png"
              topic="{club.topic}"
              slug={club.slug}
            />
          ))}
        </Clubs>
      )}
      <button onClick={toggleView}>Show alternative view</button>
    </InnerContainer>
  );
}

export default ClubsComp;
