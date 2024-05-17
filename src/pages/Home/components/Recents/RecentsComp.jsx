import { Link } from 'react-router-dom';
import { Post, Recents } from './RecentsComp-styled';
import PropTypes from 'prop-types';
import { DUMMY_DATA_RECENTS as DUMMY_DATA } from '../../../../data/recents';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApprovedEvents } from '../../../../data/data';
import { store } from '../../../../data/store';
import { fetchEvents } from '../../../../data/eventSlice';

// id comparison
DUMMY_DATA.sort((a, b) => a.id - b.id);

function PostComp({ clubName, clubSlug, title, time, topic, img }) {
  return (
    <Post>
      <div className="p-content">
        <Link to={`clubs/${clubSlug}`}>
          <h2 className="p-content-club">{clubName}</h2>
          <h1 className="p-content-title">{title}</h1>
          <p className="p-content-meta">
            <time>{time}</time> · {topic}
          </p>
        </Link>
      </div>
      <div className="img-frame">
        <Link to={`clubs/${clubSlug}`}>
          <img className="img" src={img} alt={title} />
        </Link>
      </div>
    </Post>
  );
}

PostComp.propTypes = {
  clubName: PropTypes.string.isRequired,
  clubSlug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

function RecentsComp() {
  const { events: eventsAll } = useSelector((state) => state.event);
  const events = eventsAll?.slice(-6);

  useEffect(() => {
    async function eventsHandler() {
      const response = await getApprovedEvents();
      store.dispatch(fetchEvents(response));
    }
    eventsHandler();
  }, []);

  return (
    <Recents>
      <h2 className="title">Recents</h2>
      <div className="content">
        {events.map((post) => (
          <PostComp
            key={post.id}
            clubName={post.club_name}
            clubSlug={post.club_slug}
            title={post.name}
            time={new Date(post.date).toLocaleString()}
            topic="Topic"
            img="https://placehold.co/150x100"
          />
        ))}
      </div>
    </Recents>
  );
}

export default RecentsComp;
