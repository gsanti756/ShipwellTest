import { css } from '@emotion/core'

const label = css`
  font-family: verdana, geneva;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  line-height: 20px;
`
const inputStyle = css`
  box-sizing: border-box;
  padding: 0 15px;
  min-height: 27px;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: #33475b;
  background-color: #f5f8fa;
  border: 1px solid #cbd6e2;
  border-radius: 4px;
`

const errorText = css`
  color: #d02139;
  padding-left: 5px;
  font-size: 14px;
  line-height: 1.42857;
`

const imageError = css`
  width: 18px;
  fill: green;
`

const errorContainer = css`
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`

export { label, inputStyle, errorText, imageError, errorContainer }
