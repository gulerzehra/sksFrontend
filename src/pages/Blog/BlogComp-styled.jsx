import styled from 'styled-components';

export const BlogContainer = styled.div`
  .addPost {
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
    margin: 5px 0 10px 0;
  }

  input {
    font-family: inherit;
    padding-left: 15px;
    font-size: 15px;
  }
  textarea {
    font-family: inherit;
    padding-left: 15px;
    padding-top: 15px;
    font-size: 14px;
  }

  .send-button {
    align-self: flex-end;
  }
`;
