/** @jsx jsx */
import { jsx } from '@emotion/core'
import DateTable from 'components/DataTable'
import { connect } from 'react-redux'
import { setEditAddress, setAddress } from 'actions/addressActions'
import { container, tableContainer } from './styles'

const TableStops = ({ address, setEditAddressAction, setAddressAction }) => {
  const handleSetCompleted = (item, index) => {
    const aux = []
    const newItem = item
    newItem.completed = !newItem.completed

    address.map((element, i) => {
      if (index === i) aux.push(newItem)
      else aux.push(element)
      return true
    })

    setAddressAction(aux)
  }

  const handleDeleteItem = (index) => {
    const aux = []
    address.map((element, i) => {
      if (index !== i) aux.push(element)
      return true
    })

    setAddressAction(aux)
  }

  return (
    <div css={container}>
      <div css={tableContainer}>
        <DateTable
          setEditItem={setEditAddressAction}
          setCompleted={handleSetCompleted}
          dataSource={address}
          deleteItem={handleDeleteItem}
        />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  const { address } = state.addressState
  return { address }
}

export default connect(
  mapStateToProps,
  { setEditAddressAction: setEditAddress, setAddressAction: setAddress }
)(TableStops)
