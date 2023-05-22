import React from 'react'

export default function DataTable(props) {
  const { headers, rows } = props;
  console.log('headers: ', headers);
  console.log('rows: ', rows);
  // TODO: Implement this component.
  return (
    <>
      <div>DataTable</div>
      <table>
        <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={`${header}${i}`}>{header}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {rows.map((row, i) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{`${row.first_name} ${row.last_name}`}</td>
            <td>{row.email}</td>
            <td>
              <img src={row.avatar} alt={`${row.first_name} avatar`} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}
