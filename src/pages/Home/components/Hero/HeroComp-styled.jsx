import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  overflow: hidden;
  height: 70dvh;

  .img-frame {
    width: 60%;
    height: 100%;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  .content-frame {
    width: 40%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .content-club {
    font-size: 1.5rem;
    font-weight: normal;
    color: var(--color-title);
    user-select: none;
    text-transform: uppercase;
  }

  .content-title {
    font-size: 2.5rem;
    font-weight: normal;
    color: var(--color-title);
    line-height: 1.2;
    margin-bottom: 20px;
    user-select: none;
  }

  .content-button {
    padding: 10px 20px;
    background-color: var(--color-button);
    color: #fff;
    border: none;
    border-radius: 1000px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: inherit;
    width: fit-content;
  }

  .progress-frame {
    display: flex;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: 5px;
    margin-top: 20px;
  }

  .progress-bar {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 5px;
    background-color: var(--color-progress-empty);
    border-radius: 1000px;
    margin-top: 20px;
  }

  .progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--color-progress-filled);
    border-radius: 1000px;
    animation: progress 5s linear infinite;
  }

  .progress--full {
    width: 100%;
    animation: none;
  }
`;
