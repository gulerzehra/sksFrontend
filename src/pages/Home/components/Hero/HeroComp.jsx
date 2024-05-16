import { Hero } from './HeroComp-styled';
import { useEffect, useState } from 'react';
import { useInterval } from '../../../../hooks/useInterval';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SLIDER_TRANSITION_TIME } from '../../../../utils/constants';
import Button from '../../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { store } from '../../../../data/store';
import { getApprovedEvents } from '../../../../data/data';
import { fetchEvents } from '../../../../data/eventSlice';

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
        transition={{ duration: SLIDER_TRANSITION_TIME }}
      ></motion.div>
    </div>
  );
}

function HeroComp() {
  const [current, setCurrent] = useState(0);
  const { events: eventsAll } = useSelector((state) => state.event);
  const events = eventsAll?.slice(-4);

  const { reset } = useInterval(() => {
    setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  }, SLIDER_TRANSITION_TIME * 1000);

  function handleProgressClick(index) {
    setCurrent(index);
    reset(SLIDER_TRANSITION_TIME * 1000);
  }

  useEffect(() => {
    async function eventsHandler() {
      const response = await getApprovedEvents();
      store.dispatch(fetchEvents(response));
    }
    eventsHandler();
  }, []);

  return (
    <Hero>
      <div className="img-frame">
        {events && (
          <img
            className="img"
            src="https://placehold.co/600x400"
            alt={events[current]?.name}
          />
        )}
      </div>
      <div className="content-frame">
        <div className="content">
          <h2 className="content-club">{events[current]?.club_name}</h2>
          <h1 className="content-title">{events[current]?.name}</h1>
          <Button size="medium" linkTo={`clubs/${events[current]?.club_slug}`}>
            Learn More
          </Button>
        </div>
        <div className="progress-frame">
          {/* {events.map((item, index) => (
            <ProgressBarCompOld current={current} index={index} key={item.id} />
          ))} */}
          {events.map((item, index) => {
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
