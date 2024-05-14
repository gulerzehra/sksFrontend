import styled from 'styled-components';

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .title-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .panel {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 70% 30%;
    gap: 20px;

    & div.search {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      & .search-icon-frame {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
      }

      & input.search-input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #747775;
        width: 100%;
      }
    }

    & table.table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;

      & thead.thead {
        background-color: #d9d9d9;
        color: #333;

        & th.thead-column {
          /* padding: 10px; */
          padding: 6px;
          text-align: left;

          &:first-child,
          &:last-child {
            padding-left: 12px;
          }
        }
      }

      & tbody.tbody {
        & tr.tbody-row {
          border-bottom: 1px solid #ddd;
          display: table-row;
          width: 100%;

          /* &:last-child {
            border-bottom: none;
          } */

          & td.tbody-col {
            /* padding: 10px; */
            padding: 6px;

            &:first-child,
            &:last-child {
              padding: 0 12px;
            }

            &.tbody-col--flex {
              display: flex;
              flex-direction: row;
              gap: 4px;
              align-items: center;

              &.status-approved {
                /* color: #5cb85c; */
                color: var(--color-success);
              }

              &.status-pending {
                /* color: #f0ad4e; */
                color: #9d9b9b;
              }

              &.status-rejected {
                /* color: #d9534f; */
                color: var(--color-danger);
              }
            }

            & .tbody-col-icon-frame {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 16px;
              height: 16px;
            }

            &--tools {
              text-align: right;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              gap: 10px;

              & a.tbody-col--tools-tool {
                display: flex;
                flex-direction: row;
                gap: 4px;
                align-items: center;
                border-radius: 5px;
                width: fit-content;

                & .tbody-col--tools-tool-icon-frame {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 16px;
                  height: 16px;
                }
              }
            }
          }
        }
      }

      & .tbody-row--empty,
      & .tfoot-row--empty {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        color: #747775;
      }

      & tfoot.tfoot {
        & tr.tfoot-row {
          & td.tfoot-col {
            padding: 20px;
            color: #747775;
            font-size: 0.9rem;
            font-weight: normal;
            text-align: center;
          }
        }
      }
    }

    & aside.filters {
      /* padding: 20px; */
      background-color: #f0f4f9;

      & div.filters-header-frame {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        & h3.filters-header {
          width: 100%;
          font-size: 1rem;
          background-color: #d9d9d9;
          color: #333;
          padding: 6px 12px;
          font-weight: normal;
          /* color: var(--color-title); */
        }
      }

      & div.filters-area {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & div.filters-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-bottom: 20px;
          border-bottom: 1px solid #000;

          &:last-child {
            border-bottom: none;
          }

          & h4.filters-group-title {
            font-size: 1.25rem;
            font-weight: normal;
            color: #333;
          }

          & .filters-group-option {
            cursor: pointer;
            user-select: none;
          }
        }
      }
    }
  }
`;
