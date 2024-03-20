import { Link } from 'react-router-dom';
import { Club, Clubs } from './ClubsComp-styled';
import PropTypes from 'prop-types';

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Club 1',
    img: '/clubs/club-1.png',
  },
  {
    id: 2,
    name: 'Club 2',
    img: '/clubs/club-2.png',
  },
  {
    id: 3,
    name: 'Club 3',
    img: '/clubs/club-3.png',
  },
  {
    id: 4,
    name: 'Club 4',
    img: '/clubs/club-4.png',
  },
  {
    id: 5,
    name: 'Club 5',
    img: '/clubs/club-5.png',
  },
  {
    id: 6,
    name: 'Club 6',
    img: '/clubs/club-6.png',
  },
  {
    id: 7,
    name: 'Club 7',
    img: '/clubs/club-7.png',
  },
  {
    id: 8,
    name: 'Club 8',
    img: '/clubs/club-8.png',
  },
  {
    id: 9,
    name: 'Club 9',
    img: '/clubs/club-9.png',
  },
  {
    id: 10,
    name: 'Club 1',
    img: '/clubs/club-1.png',
  },
  {
    id: 11,
    name: 'Club 2',
    img: '/clubs/club-2.png',
  },
  {
    id: 12,
    name: 'Club 3',
    img: '/clubs/club-3.png',
  },
  {
    id: 13,
    name: 'Club 4',
    img: '/clubs/club-4.png',
  },
  {
    id: 14,
    name: 'Club 5',
    img: '/clubs/club-5.png',
  },
  {
    id: 15,
    name: 'Club 6',
    img: '/clubs/club-6.png',
  },
  {
    id: 16,
    name: 'Club 7',
    img: '/clubs/club-7.png',
  },
  {
    id: 17,
    name: 'Club 8',
    img: '/clubs/club-8.png',
  },
  {
    id: 18,
    name: 'Club 9',
    img: '/clubs/club-9.png',
  },
];

function ClubComp({ name, img }) {
  return (
    <Club>
      <Link to="/">
        <img className="img" src={img} alt={name} />
      </Link>
    </Club>
  );
}

ClubComp.propTypes = {
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
            <ClubComp key={club.id} name={club.name} img={club.img} />
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
