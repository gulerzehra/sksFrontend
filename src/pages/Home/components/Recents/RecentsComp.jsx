import { Link } from 'react-router-dom';
import { Post, Recents } from './RecentsComp-styled';
import PropTypes from 'prop-types';
import { DUMMY_DATA_RECENTS as DUMMY_DATA } from '../../../../data/recents';

// id comparison
DUMMY_DATA.sort((a, b) => a.id - b.id);

function PostComp({ club, title, time, topic, img }) {
  return (
    <Post>
      <div className="p-content">
        <Link to="/">
          <h2 className="p-content-club">{club}</h2>
          <h1 className="p-content-title">{title}</h1>
          <p className="p-content-meta">
            <time>{time}</time> · {topic}
          </p>
        </Link>
      </div>
      <div className="img-frame">
        <Link to="/">
          <img className="img" src={img} alt={title} />
        </Link>
      </div>
    </Post>
  );
}

PostComp.propTypes = {
  club: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

function RecentsComp() {
  return (
    <Recents>
      <h2 className="title">Recents</h2>
      <div className="content">
        {DUMMY_DATA.map((post) => (
          <PostComp
            key={post.id}
            club={post.club}
            title={post.title}
            time={post.time}
            topic={post.topic}
            img={post.img}
          />
        ))}
      </div>
    </Recents>
  );
}

export default RecentsComp;
