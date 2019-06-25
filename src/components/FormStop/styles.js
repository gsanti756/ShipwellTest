import { css } from '@emotion/core'

const container = css`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  width: 100%;
`
const formContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px auto;
`

const inputValue = css`
  margin-left: 20px;
`
const buttonSubmit = css`
  background: #38a3dc;
  border-color: #38a3dc;
  color: #ffffff;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 5px;
  font-size: 12px;
  padding: 6px 12px;
  font-weight: 700;
  height: 47px;
  :hover {
    background-color: #0a6fc6;
    border-color: #08599f;
  }
`

const generalError = css`
  p {
    font-size: 12px;
    color: #d02139;
  }
`

export { container, inputValue, buttonSubmit, formContainer, generalError }
