/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setEditAddress, setAddress } from 'actions/addressActions'
import Button from 'components/_lib/Button'
import InputText from 'components/_lib/InputText'
import {
  popupInner,
  popup,
  container,
  buttonContainer,
  title,
  addresFormatted,
} from './styles'

const PopUp = ({
  address,
  selected,
  indexSelected,
  setEditAddressAction,
  setAddressAction,
}) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const isValid = () => {
    if (name === '') {
      setError('required')
      return false
    }
    return true
  }

  const onCancel = () => {
    setName('')
    setEditAddressAction(null, null)
  }

  const onSubmit = () => {
    if (isValid() === true) {
      const aux = []
      const newAddress = selected
      newAddress.name = name

      address.map((element, i) => {
        if (indexSelected === i) aux.push(newAddress)
        else aux.push(element)
        return true
      })

      setAddressAction(aux)
      onCancel()
    }
  }

  return (
    <div>
      {selected && (
        <div css={popup}>
          <div css={popupInner}>
            <div css={container}>
              <p css={title}> {`Stop Name: ${selected.name}`}              </p>
              <p css={addresFormatted}>{selected.formatted_address}</p>

              <InputText
                value={name}
                labelValue='New Name'
                name='stopName'
                handleChange={(value) => setName(value)}
                error={error}
              />
              <div css={buttonContainer}>
                <Button title='Cancel' handlerOnClick={onCancel} />
                <Button isSubmit title='Accept' handlerOnClick={onSubmit} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { address, selected, indexSelected } = state.addressState
  return { address, selected, indexSelected }
}

export default connect(
  mapStateToProps,
  { setEditAddressAction: setEditAddress, setAddressAction: setAddress }
)(PopUp)
