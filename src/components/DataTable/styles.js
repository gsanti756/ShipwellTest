import { css } from '@emotion/core'

const table = css`
  text-align: center;
  border-collapse: collapse;
  border: 2px solid #ddd;
  font-size: 14px;
  width: 100%;
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4caf50;
    color: white;
  }
`

const tableHeader = css`
  font-weight: bold;
`

export { table, tableHeader }
