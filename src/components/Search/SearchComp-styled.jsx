import styled from 'styled-components';

export const SearchFrame = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  background-color: #f0f4f9;
  border-radius: 16px;

  .search-icon {
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
`;
