import React from 'react';
import { StepperContainer } from './StepperComp-styled';


function StepperComp() {


  return (

    <StepperContainer>

       <div className="container">
  {/* completed */}
  <div className="step completed">
    <div className="v-stepper">
      <div className="circle" />
      <div className="line" />
    </div>
    <div className="content">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  </div>
  {/* active */}
  <div className="step active">
    <div className="v-stepper">
      <div className="circle" />
      <div className="line" />
    </div>
    <div className="content">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laborum?
    </div>
  </div>
  {/* regular */}
  <div className="step">
    <div className="v-stepper">
      <div className="circle" />
      <div className="line" />
    </div>
    <div className="content">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  </div>
</div>

    </StepperContainer>

 


  );
}

export default StepperComp;