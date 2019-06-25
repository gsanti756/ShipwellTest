/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { validateAddress } from 'actions/addressActions'
import InputText from 'components/_lib/InputText'
import spinner from 'static/images/spinner.svg'
import {
  container,
  inputValue,
  formContainer,
  buttonSubmit,
  generalError,
} from './styles'

const FormStop = ({ error, loading, nonFieldErrors, validateAddressAction }) => {
  const [stopName, setStopName] = useState('')
  const [stopValue, setStopValue] = useState('')
  const [errorStopValue, setErrorStopValue] = useState('')
  const [errorStopName, setErrorStopName] = useState('')

  useEffect(() => {
    if (loading === false) {
      setStopValue('')
      setStopName('')
    }
  }, [loading])

  const validateForm = () => {
    let status = true
    if (stopName.length === 0) {
      setErrorStopName('required')
      status = false
    }
    if (stopValue.length <= 3) {
      setErrorStopValue('the minimun length is 3 characters')
      status = false
    }
    return status
  }

  const buttonOnClick = () => {
    setErrorStopName('')
    setErrorStopValue('')
    if (validateForm() === true) validateAddressAction(stopName, stopValue)
  }

  return (
    <div css={container}>
      <div css={formContainer}>
        <InputText
          value={stopName}
          labelValue='Stop Name'
          name='stopName'
          handleChange={(value) => setStopName(value)}
          disabled={loading}
          error={errorStopName}
        />

        <InputText
          value={stopValue}
          labelValue='Stop Value'
          name='stopValue'
          extraStyle={inputValue}
          handleChange={(value) => setStopValue(value)}
          disabled={loading}
          error={errorStopValue}
        />

        <button onClick={() => buttonOnClick()} type='submit' css={buttonSubmit}>
          Submit
        </button>

        {loading && <img src={spinner} alt='loading' />}
      </div>
      <div css={generalError}>
        <p>{error}</p>
        {nonFieldErrors &&
          Array.isArray(nonFieldErrors) &&
          nonFieldErrors.length > 0 &&
          nonFieldErrors.map((x) => <p>{`* ${x}`}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { error, loading, nonFieldErrors } = state.addressState
  return { error, loading, nonFieldErrors }
}

export default connect(
  mapStateToProps,
  { validateAddressAction: validateAddress }
)(FormStop)
