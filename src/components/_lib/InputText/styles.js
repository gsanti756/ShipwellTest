import { css } from '@emotion/core'

const label = css`
  font-size: 0.8125rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.25rem;
`
const inputStyle = css`
  padding: 0 0.9375rem;
  min-height: 1.6875rem;
  min-width: 12.8125rem;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.375rem;
  color: #33475b;
  background-color: #f5f8fa;
  border: 0.0625rem solid #cbd6e2;
  border-radius: 0.25rem;
`

const errorText = css`
  color: #d02139;
  padding-left: 0.3125rem;
  font-size: 0.75rem;
  line-height: 1.42857;
`

const imageError = css`
  width: 1.125rem;
  fill: green;
`

const errorContainer = css`
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 1.25rem;
`

export { label, inputStyle, errorText, imageError, errorContainer }
