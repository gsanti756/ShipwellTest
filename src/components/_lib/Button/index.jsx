/** @jsx jsx */
import { jsx } from '@emotion/core'
import { buttonSubmit, buttonDelete, button } from './styles'

const Button = ({ title, isSubmit, handlerOnClick }) => {
  return (
    <button
      onClick={() => handlerOnClick()}
      css={[button, isSubmit ? buttonSubmit : buttonDelete]}
      type='submit'>
      {title}
    </button>
  )
}

export default Button
