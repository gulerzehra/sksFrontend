import styled from 'styled-components';

export const Recents = styled.section`
  padding: 20px 0;

  .title {
    font-size: 1.5rem;
    font-weight: normal;
    color: var(--color-title);
    margin: 0 auto 20px 20px;
  }

  .content {
    position: relative;
    padding: 20px 20px;
    background-color: var(--color-recents);
    margin-left: 35px; /* 20px + 15px */
    margin-right: 35px; /* 20px + 15px */
    white-space: nowrap;
    border-radius: 50px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 0 30px;
  }

  .content::before {
    content: '';
    position: absolute;
    top: 20px;
    right: calc(50% + 10px);
    width: 1px;
    height: calc(100% - 40px);
    background-color: var(--color-recents-border);
  }
`;

export const Post = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding-top: 20px;
  margin: 0 20px 0 0;
  border-bottom: 1px solid var(--color-recents-border);

  &:nth-child(5),
  &:nth-child(6) {
    border-bottom: none;
  }

  .p-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .p-content-club {
    font-size: 1rem;
    font-weight: normal;
    color: var(--color-title);
    user-select: none;
  }

  .p-content-title {
    font-size: 1.5rem;
    font-weight: normal;
    color: var(--color-title);
    line-height: 1.2;
    user-select: none;
    text-wrap: wrap;
  }

  .img-frame {
    width: 75px;
    height: 75px;
    overflow: hidden;
    border-radius: 10px;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
