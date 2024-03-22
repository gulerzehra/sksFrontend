import { Hero } from './HeroComp-styled';
import { useState } from 'react';
import useInterval from '../../../../hooks/useInterval';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DUMMY_DATA_SLIDERS as DUMMY_DATA } from '../../../../data/sliders';

DUMMY_DATA.sort((a, b) => a.time.localeCompare(b.time));

/**
 * @deprecated This component is deprecated and will be removed in the future.
 */
function ProgressBarCompOld({ current, index }) {
  return (
    <div className="progress-bar" key={index}>
      <div
        className={current === index ? 'progress progress--full' : 'progress'}
      ></div>
    </div>
  );
}

ProgressBarCompOld.propTypes = {
  current: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function ProgressBarComp({ onClickFunction }) {
  return (
    <div className="progress-bar" onClick={onClickFunction}>
      <div className="progress"></div>
    </div>
  );
}

ProgressBarComp.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
};

function ProgressBarAnimatedComp() {
  return (
    <div className="progress-bar">
      <motion.div
        className="progress"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 10 }}
      ></motion.div>
    </div>
  );
}

function HeroComp() {
  const [current, setCurrent] = useState(0);

  const { reset } = useInterval(() => {
    setCurrent((prev) => (prev === DUMMY_DATA.length - 1 ? 0 : prev + 1));
  }, 10000);

  function handleProgressClick(index) {
    setCurrent(index);
    reset(10000);
  }

  return (
    <Hero>
      <div className="img-frame">
        <img
          className="img"
          src={DUMMY_DATA[current].img}
          alt={DUMMY_DATA[current].title}
        />
      </div>
      <div className="content-frame">
        <div className="content">
          <h2 className="content-club">{DUMMY_DATA[current].club}</h2>
          <h1 className="content-title">{DUMMY_DATA[current].title}</h1>
          <button className="content-button">
            <Link to="/">Learn More</Link>
          </button>
        </div>
        <div className="progress-frame">
          {/* {DUMMY_DATA.map((item, index) => (
            <ProgressBarCompOld current={current} index={index} key={item.id} />
          ))} */}
          {DUMMY_DATA.map((item, index) => {
            if (current === index) {
              return <ProgressBarAnimatedComp key={item.id} />;
            }

            return (
              <ProgressBarComp
                key={item.id}
                onClickFunction={() => handleProgressClick(index)}
              />
            );
          })}
        </div>
      </div>
    </Hero>
  );
}

export default HeroComp;
