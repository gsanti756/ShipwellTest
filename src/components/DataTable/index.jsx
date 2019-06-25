/** @jsx jsx */
import { jsx } from '@emotion/core'
import Row from 'components/DataTable/Row'
import { table, tableHeader } from './styles'

const DateTable = ({ dataSource, setEditItem, setCompleted, deleteItem }) => {
  return (
    <div>
      {dataSource && Array.isArray(dataSource) && dataSource.length > 0 && (
        <table css={table}>
          <tbody>
            <tr css={tableHeader}>
              <td>Number</td>
              <td>Name</td>
              <td>Formatted Address</td>
              <td>Is Complete</td>
              <td>Action</td>
            </tr>
            {dataSource.map((x, index) => (
              <Row
                item={x}
                index={index}
                setCompleted={setCompleted}
                setEditItem={setEditItem}
                deleteItem={deleteItem}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default DateTable
