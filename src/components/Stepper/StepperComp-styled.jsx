import styled from 'styled-components';

export const StepperContainer = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .step {
    padding: 10px;
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
    background-color: cream;
    align-items: center;
  }

  .v-stepper {
    position: relative;
  }

  .step .circle {
    background-color: black;
    border: 3px solid black;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    display: inline-block;
  }

  .step .line {
    top: -10px;
    left: 12px;
    /*   height: 120px; */
    height: 180px;

    position: absolute;
    border-left: 3px solid black;
  }

  .step.completed .circle {
    visibility: visible;
    background-color: black;
    border-color: black;
  }

  .step.completed .line {
    border-left: 3px solid black;
  }

  .step.active .circle {
    visibility: visible;
    border-color: black;
  }

  .step.empty .circle {
    visibility: hidden;
  }

  .step.empty .line {
    /*     visibility: hidden; */
    /*   height: 150%; */
    top: 90;
    height: 150%;
  }

  .step:last-child .line {
    border-left: 3px solid white;
    z-index: -1; /* behind the circle to completely hide */
  }

  .content {
    margin-left: 20px;
    display: inline-block;
    display: flex;
    background-color: #f0f4f9;
    border-radius: 25px;
    padding: 20px;
  }

  /* codepen override */
  html * {
    font-size: 15px !important;
    color: #000 !important;
    font-family: Arial !important;
  }
  .steps {
    display: flex;
    flex-direction: column;
  }
  .img {
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      width: 98%;
      height: 40%;
      object-fit: cover;
      align-items: right;
      border-radius: 15px;
    }
  }
`;
