import React, { useMemo } from 'react';
import { useTable } from 'react-table'


export const Grid = ({ tableConfig, tableData }) => {

  const columns = useMemo(() => tableConfig.map((item, inx) => {
    if (item.hasOwnProperty('component')) {
      return {
        Header: item.title, accessor: item.field, Cell: props => {
          const CustomComponent = item.component
          return (
            <CustomComponent data={props.value ? props.value : props.data[inx][item.field]} />
          )
        }
      }
    } else return {
      Header: item.title, accessor: item.field
    }
  }), [])

  const data = useMemo(() => tableData, [])

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header').toUpperCase()}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {
                      cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )})}
      </tbody>
    </table>
  )
}

export default Grid;