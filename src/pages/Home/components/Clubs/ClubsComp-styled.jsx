import styled from 'styled-components';

export const Clubs = styled.section`
  padding: 20px 0;

  .title {
    font-size: 1.5rem;
    font-weight: normal;
    color: var(--color-title);
    margin-bottom: 20px;
    margin: 0 auto 20px 20px;
  }

  .content {
    position: relative;
    display: flex;
    gap: 20px;
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    padding: 10px;
    background-color: transparent;
    color: #fff;
    text-shadow: 0 2px 4px #000;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: inherit;
    font-size: 2.5rem;
    z-index: 1000;
    top: 50%;
    transform: translateY(-50%);
  }

  .prev-btn {
    left: 0;
  }

  .next-btn {
    right: 0;
  }

  .carousel {
    position: relative;
    display: flex;
    gap: 20px;
    padding: 20px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    white-space: nowrap;
  }
`;

export const Club = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 36px;
  overflow: hidden;
  flex-shrink: 0;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
