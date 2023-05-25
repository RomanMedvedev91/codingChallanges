import './App.css';
import { testData } from "./testData";
import Table from './components/Table';
/**
 * Coding challenge: Create a reusable table component.
 *
 * It should be able to take in arbitrary data rows, arbitrary column definitions and allow
 * custom rendering and sorting.
 *
 *  * For this exercise we want to use this component to render this data set with the folloiwing
 * columns:
 *
 * - Name (as first_Name and last_name, like "Janice Kranz")
 * - Email (rendered as a 'mailto:' link)
 * - Date created, shown as a friendly date ("Tue Mar 01 2022") in the current timezone
 * | name | Email | Data Created |
 * 
 *
 *
 * As properties, thr resuable component should take:
 * - an array of objects representing row data
 * - an array of column definitions including:
 *      * name (shown in header)
 *      * id (string)
 *      * isSortable (boolean)
 * - and additional properties for custom rendering and sorting.
 *
 * By default, it should try to render cells using the column id as the key applied to
 * each data row. The default sort should be a string comparison.
 *
 * The table should sort the rows based on a selected column and an ascending
 * or descending state. The default sorting column should be the first sortable
 * column with ascending selected.
 *
 * The column that we're sorting by should be shown with one of the following icons.
 *
 * const ascendingIcon = '↑';
 * const descendingIcon = '↓';
 */

export interface TableRow {
  [key: string]: string | number | Date;
}

export interface TableColumn {
  id: string;
  name: string;
  isSortable: boolean;
}
/*
 {
    id: 319295055,
    first_name: "Janice",
    last_name: "Kranz",
    email: "jkranz@example.com",
    updated_at: "2008-05-31T17:00:00.000-07:00",
    created_at: "2008-05-31T17:00:00.000-07:00",
    disabled: false,
    mask_structures: false,
    api_keys_count: 0,
    last_logged_in: "2022-03-01T08:49:13.000-08:00"
  },
  */
 
const generateColums = (data: any[]) => {
  const keys = Object.keys(data[0]);
  return keys.map(key => {
    return {
      name: key.replace(/_/g,''),
      id: key,
      isSortable: true
    }
  })
};

const columns = [{
  id: '1',
  name: 'Name',
  isSortable: true,
}, {
  id: '2',
  name: 'Email',
  isSortable: true,
}, {
  id: '3',
  name: 'Date created',
  isSortable: true
}];

const rowsData = testData.map(raw => {
  return {
    id: raw.id,
    name: `${raw.first_name} ${raw.last_name}`,
    email: raw.email,
    created_at: raw.created_at
  }
});

function App() {
  return (
    <div className="App">
      <pre>{JSON.stringify(testData, null, 2)}</pre>
      <Table columns={columns} rows={rowsData} defaultSortColumn={columns[0].id} defaultSortAscending={true} />
    </div>
  );
}

export default App;
