/** @jsx jsx */
import { jsx } from '@emotion/core'
import errorIcon from 'static/images/error.svg'
import { label, inputStyle, errorText, imageError, errorContainer } from './styles'

const InputText = ({
  name,
  labelValue,
  value,
  extraStyle,
  handleChange,
  disabled,
  error,
}) => {
  const onChangeInput = (e) => {
    const { value } = e.target
    handleChange(value)
  }
  return (
    <div css={extraStyle}>
      <p css={label}>{labelValue}</p>
      <input
        type='text'
        value={value}
        name={name}
        css={[inputStyle]}
        onChange={onChangeInput}
        disabled={disabled}
      />

      {error && error !== '' && (
        <div css={errorContainer}>
          <img src={errorIcon} alt='error' css={imageError} />
          <p css={errorText}>{error}</p>
        </div>
      )}
    </div>
  )
}

export default InputText
