import { ClubInfoContainer } from './ClubInfo-styled';
import Stepper from '../Stepper/StepperComp';
import Button from '../Button/Button';
import { DUMMY_DATA_EVENTS as DUMMY_DATA } from '../../data/events';

function ClubInfo() {
  return (
    <div>
      <ClubInfoContainer>
        <div className="club-info">
          <div className="logo">
            <img src="/clubs/club-4.png" alt="Club 4" />
          </div>

          <div className="info">
            <h1>
              Rockstar Games
              <Button size="medium">Register</Button>
            </h1>
            <p>Since 19 May 2021</p>
            <p>
              Rockstar Games predominantly publishes games in the
              action-adventure genre, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos ea eaque totam pariatur? Dolores
              quibusdam vitae, quidem, quod, quas voluptates quae quia
            </p>
          </div>
        </div>
      </ClubInfoContainer>

      <Stepper data={DUMMY_DATA} />
    </div>
  );
}

export default ClubInfo;
