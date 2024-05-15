import { StepperContainer } from './StepperComp-styled';
import PropTypes from 'prop-types';

function StepComp({ children }) {
  return (
    <div className="step">
      <div className="v-stepper">
        <div className="circle" />
        <div className="line" />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

StepComp.propTypes = {
  children: PropTypes.node.isRequired,
};

function StepperComp({ data, children }) {
  return (
    <StepperContainer>
      <h2 style={{ marginLeft: '20px' }}>Following Events</h2>
      <div className="container">
        <div className="steps">
          {data.slice(0, 4).map((item, index) => (
            <StepComp
              key={index}
            >{`${item.title}: ${item.description}`}</StepComp>
          ))}
        </div>

        <div className="img">
          {children}
          <img
            src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </StepperContainer>
  );
}

StepperComp.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
};

export default StepperComp;
