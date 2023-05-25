import { useState } from "react";
import { TableRow, TableColumn } from "../App";

interface ITableProps {
  columns: TableColumn[];
  rows: TableRow[];
  defaultSortColumn?: string;
  defaultSortAscending?: boolean;
};

export default function Table({ columns, rows, defaultSortColumn, defaultSortAscending }: ITableProps) {
  const [sortedColumn, setSortedColumn] = useState<string>(defaultSortColumn || '');
  const [sortAscending, setSortAscending] = useState<boolean>(defaultSortAscending || true);

  const handleSort = (columnId: string) => {
    if (columnId === sortedColumn) {
      setSortAscending(!sortAscending);
    } else {
      setSortedColumn(columnId);
      setSortAscending(true);
    }
  };

  const ascendingIcon = '↑';
  const descendingIcon = '↓';

  const renderCell = (row: TableRow, columnId: string) => {
    // Custom rendering logic based on columnId
    if (columnId === 'email') {
      return <a href={`mailto:${row[columnId]}`}>{String(row[columnId])}</a>;
    } else if (columnId === 'dateCreated') {
      const date = new Date(row[columnId]);
      return date.toLocaleString();
    }

    // Default rendering
    return String(row[columnId]);
  };
  const renderRows = () => {
    const sortedData = rows.sort((a, b) => {
      const valA = a[sortedColumn];
      const valB = b[sortedColumn];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortAscending
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA)
      }

      return sortAscending ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
    });

    return sortedData.map((row, index) => (
      <tr key={index}>
        {columns.map(column => (
          <td key={column.id}>{renderCell(row, column.id)}</td>
        ))}
      </tr>
    ));
  }

  return (
    <table>
      <thead>
      <tr>
      {columns.map((column) => (
        <th
          key={column.id}
          onClick={() => column.isSortable && handleSort(column.id)}
        >
          {column.name}
          {column.isSortable && column.id === sortedColumn && (<span>{sortAscending ? ascendingIcon : descendingIcon}</span>)}
        </th>
        ))}
      </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
