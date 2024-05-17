import { Link } from 'react-router-dom';
import { Club, Clubs } from './ClubsComp-styled';
import PropTypes from 'prop-types';
import { DUMMY_DATA_CLUBS as DUMMY_DATA } from '../../../../data/clubs';
import { useEffect } from 'react';
import { store } from '../../../../data/store';
import { fetchClubs } from '../../../../data/clubSlice';
import { useSelector } from 'react-redux';
import { getClubs } from '../../../../data/data';

DUMMY_DATA.sort((a, b) => a.name.localeCompare(b.name));

function ClubComp({ slug, name, img }) {
  return (
    <Club>
      <Link to={`/clubs/${slug}`}>
        <img className="img" src={img} alt={name} title={name} />
      </Link>
    </Club>
  );
}

ClubComp.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

function ClubsComp() {
  const { accessToken } = useSelector((state) => state.user);
  const { clubs } = useSelector((state) => state.club);

  function scrollToPrev() {
    document.querySelector('.carousel').scrollLeft -= 400;
  }

  function scrollToNext() {
    document.querySelector('.carousel').scrollLeft += 400;
  }

  useEffect(() => {
    async function clubsHandler() {
      const response = await getClubs(accessToken);
      store.dispatch(fetchClubs(response));
    }
    clubsHandler();
  }, [accessToken]);

  return (
    <Clubs>
      <h2 className="title">Clubs</h2>
      <div className="content">
        <button className="prev-btn" onClick={scrollToPrev}>
          &#60;
        </button>
        <div className="carousel">
          {clubs.map((club) => (
            <ClubComp
              key={club.id}
              slug={club.slug}
              name={club.name}
              img="/placeholders/club.png"
            />
          ))}
        </div>
        <button className="next-btn" onClick={scrollToNext}>
          &#62;
        </button>
      </div>
    </Clubs>
  );
}

export default ClubsComp;
