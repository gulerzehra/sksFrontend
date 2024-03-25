import styled from 'styled-components';

export const InnerContainer = styled.div`
  padding: 20px;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-title);
    text-transform: uppercase;
  }

  .search-frame {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    background-color: #f0f4f9;
    border-radius: 16px;
  }

  svg.search-icon {
    margin-left: 10px;
    width: 1.2rem;
    height: 1.2rem;
    stroke: #757575;
  }

  .search {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    background-color: transparent;
    padding: 0 10px;
    color: #000;

    &:placeholder-shown {
      color: var(--color-progress-empty);
    }
  }
`;

export const Clubs = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  .club {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 12px;
    transition: box-shadow 0.3s;

    .club-img-frame {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 12px;
      overflow: hidden;
      background-color: #f0f4f9;
      padding: 32px;
    }

    .club-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .club-content {
      padding: 8px;

      .club-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--color-title);
        line-height: 1.2;
      }

      .club-events-tip {
        font-size: 1rem;
        color: var(--color-club-event-text);
        transform: translateY(5px);
      }

      .club-events {
        font-size: 1rem;
        color: var(--color-title);
      }
    }
  }
`;

export const ClubsAlt = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .club-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .club {
    position: relative;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    gap: 10px;
    background-color: var(--color-club-alt);
    color: #fff;
    height: 250px;
    border-radius: 16px;

    & .club-side {
      position: absolute;
      width: 150px;
      height: 150px;
      top: 50%;
      left: -100px;
      transform: translateY(-50%);

      & .club-img-frame {
        width: 85%;
        height: 85%;
        border-radius: 32px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1000;

        & .club-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    & .club-shadow {
      position: absolute;
      width: 85%;
      height: 85%;
      background-color: #d9d9d9;
      border-radius: 32px;
      top: 0;
      left: 0;
    }

    & .club-content {
      font-size: 0.6rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 12px;
      margin-left: 50px;
      height: 100%;

      & h2.club-content-title {
        font-size: 0.8rem;
        font-weight: normal;
        color: #fff;
      }

      & p.club-content-description {
        font-size: 0.6rem;
        color: #fff;
      }

      & div.club-content-contact {
        width: 100%;
        padding-right: 16px;
        display: flex;
        flex-direction: row;
        gap: 16px;
        font-size: 0.6rem;
        color: #fff;
        flex: 1;
        align-items: flex-end;
        justify-content: space-between;

        & .contact-president {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        & .contact-mail {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
      }
    }
  }
`;
