import styled from 'styled-components';

export const ClubInfoContainer = styled.div`
  .logo {
    width: 200px;
    height: 200px;
    border-radius: 36px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .club-info {
    display: flex;
    flex-direction: row;
    background-color: #cec6c6;
    border-radius: 25px;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .info {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding: 20px;

    h1 {
      font-family: Ubuntu Condensed;
      font-size: 2.5rem;
      font-weight: 400;
      text-align: left;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 100px;

      button {
        background-color: #0a58d0;
        color: #fff;
        border: none;
        padding: 13px 35px;
        border-radius: 20px;
        cursor: pointer;

        opacity: 0px;
      }
    }

    p {
      font-size: 1em;
      color: #666;
      margin-top: 0px;
      padding: 0;
    }
  }
`;
