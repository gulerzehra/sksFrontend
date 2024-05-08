import styled from 'styled-components';

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .panel {
    display: flex;
    flex-direction: row;
    gap: 20px;

    & table.table {
      width: 70%;
      border-collapse: collapse;

      & thead.thead {
        background-color: #d9d9d9;
        color: #333;

        & th.thead-column {
          /* padding: 10px; */
          padding: 6px;
          text-align: left;
        }
      }

      & tbody.tbody {
        & tr.tbody-row {
          border-bottom: 1px solid #ddd;

          /* &:last-child {
            border-bottom: none;
          } */

          & td.tbody-col {
            /* padding: 10px; */
            padding: 6px;

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
    }

    & aside.filters {
      width: 30%;
      padding: 20px;
      /* background-color: #f2f2f2; */
    }
  }
`;
