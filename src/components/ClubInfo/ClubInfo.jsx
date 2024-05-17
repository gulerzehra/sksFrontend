import { ClubInfoContainer } from './ClubInfo-styled';
import Stepper from '../Stepper/StepperComp';
import Button from '../Button/Button';
import { DUMMY_DATA_EVENTS as DUMMY_DATA } from '../../data/events';
import PropTypes from 'prop-types';

function ClubInfo({ selectedClub, posts }) {
  return (
    <div>
      <ClubInfoContainer>
        <div className="club-info">
          <div className="logo">
            <img src="/clubs/club-4.png" alt="Club 4" />
          </div>

          <div className="info">
            <h1>
              {selectedClub?.name}
              <Button size="medium">Register</Button>
            </h1>
            <p>
              Since 19 May 2021 -{' '}
              {selectedClub?.is_active ? 'Active' : 'Inactive'}
            </p>
            <p>Manager ID: {selectedClub?.manager}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ea eaque totam pariatur? Dolores quibusdam vitae,
              quidem, quod, quas voluptates quae quia
            </p>
          </div>
        </div>
      </ClubInfoContainer>

      <Stepper data={DUMMY_DATA} posts={posts}>
        <img
          src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
          alt=""
        />
      </Stepper>
    </div>
  );
}

ClubInfo.propTypes = {
  selectedClub: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};

export default ClubInfo;
