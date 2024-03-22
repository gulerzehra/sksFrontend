import { Link } from 'react-router-dom';
import { Club, Clubs } from './ClubsComp-styled';
import PropTypes from 'prop-types';
import { DUMMY_DATA_CLUBS as DUMMY_DATA } from '../../../../data/clubs';

DUMMY_DATA.sort((a, b) => a.name.localeCompare(b.name));

function ClubComp({ id, name, img }) {
  return (
    <Club>
      <Link to={`/clubs/${id}`}>
        <img className="img" src={img} alt={name} />
      </Link>
    </Club>
  );
}

ClubComp.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

function ClubsComp() {
  function scrollToPrev() {
    document.querySelector('.carousel').scrollLeft -= 400;
  }

  function scrollToNext() {
    document.querySelector('.carousel').scrollLeft += 400;
  }

  return (
    <Clubs>
      <h2 className="title">Clubs</h2>
      <div className="content">
        <button className="prev-btn" onClick={scrollToPrev}>
          &#60;
        </button>
        <div className="carousel">
          {DUMMY_DATA.map((club) => (
            <ClubComp
              key={club.id}
              id={club.id}
              name={club.name}
              img={club.img}
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
