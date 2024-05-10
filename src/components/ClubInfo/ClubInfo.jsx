import React from 'react';
import { ClubInfoContainer } from './ClubInfo-styled';
import StepperComp from '../Stepper/StepperComp';

function ClubInfo() {

    return (

        <div>

        <ClubInfoContainer>
        <div className="club-info">

        <div className='logo' >
        <img src="/clubs/club-4.png" alt="Club 4"  />
        </div>


        

        <div className='info'>
            <h1>Rockstar Games
            <button>Register</button></h1>
            <p>Since 19 May 2021</p>
            <p>Rockstar Games predominantly publishes games in the action-adventure genre, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea eaque totam pariatur? Dolores quibusdam vitae </p>
        </div>

        </div>

        </ClubInfoContainer>

        <StepperComp />


        

        </div>

        

    );
    
}


export default ClubInfo;