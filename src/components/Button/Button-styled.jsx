import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    padding: 6px 16px;
    font-size: 14px;
  `,
  medium: css`
    padding: 9px 24px;
    font-size: 16px;
  `,
  large: css`
    padding: 12px 32px;
    font-size: 18px;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-button);
    color: #fff;
  `,
  secondary: css`
    background-color: transparent;
    color: var(--color-button);
    border: 2px solid var(--color-button);
  `,
  danger: css`
    background-color: var(--color-danger);
    color: #fff;
  `,
};

export const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--color-button);
  color: #fff;
  border: none;
  border-radius: 1000px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: inherit;
  width: fit-content;

  ${({ size }) => sizes[size]}
  ${({ variation }) => variations[variation]}
`;

// export const Button = styled.button`
//   padding: 10px 20px;
//   background-color: var(--color-button);
//   color: #fff;
//   border: none;
//   border-radius: 1000px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   font-family: inherit;
//   width: fit-content;
// `;
