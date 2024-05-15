import React from 'react';
import { StepperContainer } from './StepperComp-styled';

function StepperComp() {
  return (
    <StepperContainer>
      <h2 style={{ marginLeft: '20px' }}>Following Events</h2>
      <div className="container">
        <div className="steps">
          {/* completed */}
          <div className="step completed">
            <div className="v-stepper">
              <div className="circle" />
              <div className="line" />
            </div>
            <div className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
          </div>
          {/* active */}
          <div className="step active">
            <div className="v-stepper">
              <div className="circle" />
              <div className="line" />
            </div>
            <div className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laborum?
            </div>
          </div>
          {/* regular */}
          <div className="step">
            <div className="v-stepper">
              <div className="circle" />
              <div className="line" />
            </div>
            <div className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
          </div>
          <div className="step">
            <div className="v-stepper">
              <div className="circle" />
              <div className="line" />
            </div>
            <div className="content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
          </div>
        </div>

        <div className="img">
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

export default StepperComp;
