/** @jsx jsx */
import { jsx } from '@emotion/core'
import { buttonEdit, buttonDelete, button } from './styles'

const Row = ({ item, index, setCompleted, setEditItem, deleteItem }) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.formatted_address}</td>
      <td>
        <input
          type='checkbox'
          defaultChecked={index.isCompleted}
          onChange={() => setCompleted(item, index)}
        />
      </td>
      <td>
          <button
        onClick={() => deleteItem(index)}
        type='submit'
        css={[button, buttonDelete]}>
          Delete
      </button>
        <button
          onClick={() => setEditItem(item, index)}
          type='submit'
          css={[button, buttonEdit]}>
          Edit
        </button>
      </td>
    </tr>
  )
}

export default Row
