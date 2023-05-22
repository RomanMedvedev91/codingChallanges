/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { DataTable } from '../DataTable';

describe('DataTable', () => {
  const headers = ['id', 'name'];
  const rows = [
    { id: 1, name: 'Andy', age: 42 },
    { id: 2, name: 'Bob', age: 33 },
  ];

  it('should render a table', () => {
    render(<DataTable headers={headers} rows={rows} />);

    expect(document.querySelector('table')).not.toBeNull();
  });

  it('should render headers accordingly', () => {
    render(<DataTable headers={headers} rows={rows} />);

    const tableHeaders = document.querySelectorAll('thead th');
    expect(tableHeaders).toHaveLength(headers.length);

    headers.forEach((header, index) => {
      expect(tableHeaders[index].innerHTML).toBe(header);
    });

    expect(screen.queryByText('age')).toBeNull();
  });

  it('should render rows accordingly', () => {
    render(<DataTable headers={headers} rows={rows} />);
    
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((tableRow, rowIndex) => {
      const tableCells = tableRow.querySelectorAll('td');
      tableCells.forEach((tableCell, columnIndex) => {
        const value = rows[rowIndex][headers[columnIndex]];
        expect(tableCell.innerHTML).toBe(`${value}`);
      })
    });
  });
});
