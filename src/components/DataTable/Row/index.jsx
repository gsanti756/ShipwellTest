/** @jsx jsx */
import { jsx } from '@emotion/core'
import Button from 'components/_lib/Button'

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
        <Button
          title='Delete'
          handlerOnClick={() => {
            deleteItem(index)
          }}
        />
        <Button
          isSubmit
          title='Edit'
          handlerOnClick={() => {
            setEditItem(item, index)
          }}
        />
      </td>
    </tr>
  )
}

export default Row
