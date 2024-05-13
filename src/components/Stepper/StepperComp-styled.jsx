import styled from 'styled-components';

export const StepperContainer = styled.div`
.container {
  width: 50%;
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
  top: 23px;
  left: 12px;
/*   height: 120px; */
  height: 100%;
    
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
    background-color: #F0F4F9;
    border-radius: 25px;
    padding: 20px;
}


/* codepen override */
html *
{
   font-size: 15px !important;
   color: #000 !important;
   font-family: Arial !important;
}


`;