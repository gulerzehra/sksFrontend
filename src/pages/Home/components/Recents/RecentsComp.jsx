import { Link } from 'react-router-dom';
import { Post, Recents } from './RecentsComp-styled';
import PropTypes from 'prop-types';

const DUMMY_DATA = [
  {
    id: 1,
    club: 'AICLUB',
    title:
      'What is the Connection Between Advertising and Artificial Intelligence?',
    time: '1 hours ago',
    topic: 'Technology',
    img: '/recents/recent-1.png',
  },
  {
    id: 2,
    club: 'Physiotherapy Club',
    title:
      'Anxiety and Stress Management with Positive Psychology: A Metacognitive Approach',
    time: '12 hours ago',
    topic: 'Health',
    img: '/recents/recent-2.png',
  },
  {
    id: 3,
    club: 'Haydi Tut Elimi Club',
    title: 'Tackling Addiction Youth Presentation and Child Abuse',
    time: '4 hours ago',
    topic: 'Health',
    img: '/recents/recent-3.png',
  },
  {
    id: 4,
    club: 'Art and Literature Club',
    title:
      'Exploring Canakkale: Unraveling the Tapestry of History, Culture, and Natural Beauty',
    time: '8 hours ago',
    topic: 'Health',
    img: '/recents/recent-4.png',
  },
  {
    id: 5,
    club: 'Technology and Innovation Club',
    title: 'Introduction to Git-Github',
    time: '1 hours ago',
    topic: 'Technology',
    img: '/recents/recent-5.png',
  },
  {
    id: 6,
    club: 'Gaming Club',
    title:
      'The Power of Storytelling in Video Games: How Narrative Immerses Players and Enhances the Experience',
    time: '3 hours ago',
    topic: 'Gaming',
    img: '/recents/recent-6.png',
  },
];

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
      <p className="description">Based on your club interests</p>
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
