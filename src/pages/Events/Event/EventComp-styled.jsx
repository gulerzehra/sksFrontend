import styled from 'styled-components';

export const EventCompStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 2rem 0;

  .pane {
    display: flex;
    flex-direction: column;
  }

  .left-pane {
    flex: 2;

    & .event-img-frame {
      width: 100%;

      & .event-img {
        width: 100%;
      }
    }

    & aside.event-date-url {
      margin-top: 1rem;
      padding: 1rem;
      font-size: 1.25rem;
      background-color: var(--color-header);
      color: var(--color-switcher);

      .event-date {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: var(--color-switcher);
      }

      .event-url {
        font-size: 1.25rem;
      }

      a.event-url-link {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  .right-pane {
    flex: 3;

    & .event-title {
      margin-top: 1rem;
      font-size: 2rem;
      color: var(--color-switcher);
    }

    & .event-club {
      font-size: 1.25rem;
      color: var(--color-club-event-text);
    }

    & .event-description {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: var(--color-event-detail-text);
    }
  }
`;
