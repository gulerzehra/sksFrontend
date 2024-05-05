import styled from 'styled-components';

export const InnerContainer = styled.div`
  padding: 20px;

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
    color: var(--color-progress-empty);
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

  .button-aligner {
    display: flex;
    justify-content: center;
  }

  button.load-more {
    padding: 10px 20px;
    background-color: #fff; //! dark: #000
    border: 3px solid #b5b7b9; //! dark: #000
    color: #b5b7b9; //! dark: #fff
    border-radius: 1000px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
  }

  .title-line {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .title-line .title,
  .weekly-title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-title);
  }

  .title-line .filter-btn {
    /* margin-left: auto; */
    background-color: #f0f4f9;
    color: #616161;
    padding: 8px 16px;
    border: none;
    border-radius: 1000px;
    cursor: pointer;
    font-family: inherit;
    display: flex;
    align-items: center;
    position: relative;
  }

  .title-line .filter-btn .filter-icon {
    /* margin-left: 5px; */
    font-size: 1rem;
  }

  .title-line .filter-btn .filter-popup {
    cursor: auto;
    user-select: text;
    top: 40px;
    left: 0;
    position: absolute;
    background-color: var(--color-header);
    border-radius: 16px;
    padding: 10px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    /* box-shadow: 0 15px 10px -15px rgba(0, 0, 0, 0.5); */
    /* display: none; */
  }

  .filter-popup .popup-header {
    font-weight: bold;
    color: var(--color-title);
    padding-bottom: 8px;
    border-bottom: 1px solid #c1c1c1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .popup-header-title {
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-title);
  }

  .popup-header-calendar {
    font-size: 1rem;
    color: #7b7b7b;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f9f8f8;
    padding: 8px 16px;
    border-radius: 1000px;
    cursor: pointer;
  }

  .popup-header-calendar .calendar-icon {
    font-size: 1rem;
    margin-right: 5px;
  }

  .popup-header-calendar .calendar-text {
    font-size: 0.8rem;
    font-weight: bold;
    width: max-content;
    user-select: none;
  }

  .filter-popup .popup-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px 0;
  }

  .filter-option {
    cursor: pointer;
  }

  .filter-option label.filter-option-label {
    background-color: #d9d9d9;
    color: #000;
    padding: 8px 16px;
    border-radius: 1000px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    cursor: inherit;
    font-size: 0.8rem;
    user-select: none;
  }
`;

export const Events = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  .event {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #f0f4f9;
    border-radius: 10px;
  }

  .event-img-frame {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  }

  .event-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .event .event-content {
    padding: 10px;
  }

  .event .event-content .event-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
  }

  .event .event-content .event-address {
    font-size: 0.8rem;
    font-style: normal;
    color: #7b7b7b;
  }

  .event .event-content .event-datetime {
    margin-top: 16px;
    font-size: 1rem;
    color: #575957;
  }
`;
