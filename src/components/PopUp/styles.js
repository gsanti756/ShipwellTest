import { css } from '@emotion/core'

const popup = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  }
`

const popupInner = css`
  position: absolute;
  left: 32%;
  right: 32%;
  top: 32%;
  bottom: 32%;
  margin: auto;
  background: white;
  }
`

const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const buttonContainer = css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
`

const title = css`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
`

const addresFormatted = css`
  font-size: 15px;
  margin-bottom: 20px;
`

export { popup, popupInner, container, buttonContainer, title, addresFormatted }
