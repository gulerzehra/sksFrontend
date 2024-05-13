import styled from 'styled-components';

export const AddEventContainer = styled.div`
  .addEvent {
    display: flex;
    background-color: #f0f4f9;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  p {
    color: #747775;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .yatay-cizgi {
    border-bottom: 1px solid black;
    width: 1100px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    padding-left: 10px;
    font-size: 15px;
  }
  textarea {
    padding-left: 15px;
    padding-top: 10px;
    font-size: 10px;
  }

  .send-button {
    background-color: #3b7cff;
    color: white;
    border: none;
    border-radius: 20px;
    width: 110px;
    height: 30px;
    margin-top: 10px;
    font-size: 14px;
    cursor: pointer;
  }
`;
