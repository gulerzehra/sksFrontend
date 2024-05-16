import { Link } from 'react-router-dom';
import { StepperContainer } from './StepperComp-styled';
import PropTypes from 'prop-types';

function StepComp({ children, id }) {
  return (
    <div className="step">
      <div className="v-stepper">
        <div className="circle" />
        <div className="line" />
      </div>
      <div className="content">
        {children}
        <Link to={`/events/${id}`}>View More</Link>
      </div>
    </div>
  );
}

StepComp.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

function StepperComp({ posts, children }) {
  console.log(posts);
  if (!posts) return null;
  return (
    <StepperContainer>
      <h2 style={{ marginLeft: '20px' }}>Following Events</h2>
      <div className="container">
        <div className="steps">
          {posts.slice(0, 4).map((item, index) => (
            <StepComp key={index} id={item?.id}>
              {item?.content}
            </StepComp>
          ))}
        </div>

        <div className="img">{children}</div>
      </div>
    </StepperContainer>
  );
}

StepperComp.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
};

export default StepperComp;
