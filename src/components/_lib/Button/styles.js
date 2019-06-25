import { css } from '@emotion/core'

const button = css`
  color: #ffffff;
  cursor: pointer;
  margin: auto 0.125rem;
  border-radius: 0.3125rem;
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  font-weight: 700;
  height: 2.1875rem;
  width: 4.375rem;
`

const buttonSubmit = css`
  background: #38a3dc;
  border-color: #38a3dc;

  :hover {
    background-color: #0a6fc6;
    border-color: #08599f;
  }
`
const buttonDelete = css`
  color: #d02139;
  border-color: transparent;
  background-color: transparent;
  :hover {
    color: #d0103a;
    border-color: transparent;
  }
`

export { button, buttonSubmit, buttonDelete }
