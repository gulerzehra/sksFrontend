import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: 'Ubuntu Condensed', sans-serif;
    --font-size: 16px;

    --color-success: #35b25f;
    --color-danger: #d44040;

    &, &.light {
      --color-body: #fff;
      --color-body-text: #212529;
      --color-title: #000;
      --color-description: #7b7b7b;
      --color-header: #f0f4f9;
      --color-switcher: #000;
      --color-switcher-circle: #fff;
      --color-unread-count: #d9d9d9;
      --color-progress-filled: #000;
      --color-progress-empty: #abaaaa;
      --color-button: #0a58d0;
      --color-recents: #f0f4f9;
      --color-recents-border: #c1c1c1;
      --color-footer: #808080;
      --color-footer-text: #fff;

      --color-club-alt: #616161;
      --color-club-event-text: #0a58d0;
    }

    &.dark {
      --color-body: #363535;
      --color-body-text: #f9f8f8;
      --color-title: #f9f8f8;
      --color-description: #c9c9c9;
      --color-header: #000000;
      --color-switcher: #fff;
      --color-switcher-circle: #000;
      --color-unread-count: #d9d9d9;
      --color-progress-filled: #fff;
      --color-progress-empty: #abaaaa;
      --color-button: #0a58d0;
      --color-recents: #000;
      --color-recents-border: #747775;
      --color-footer: #808080;
      --color-footer-text: #fff;

      --color-club-alt: #000;
      --color-club-event-text: #297fff;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    color: var(--color-body-text);
    text-align: left;
    background-color: var(--color-body);
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
  }

  .hidden {
    display: none !important;
  }
`;

export default GlobalStyles;
