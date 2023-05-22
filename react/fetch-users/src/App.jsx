import { useState, useEffect } from 'react';
import './App.css';

import DataTable from './components/DataTable';

const url = 'https://reqres.in/api/users';

function App() {
    // TODO: pull data from the url above

  /**
   * TODO: pass data into the DataTable component.
   * You may hardcode the headers if you'd like.
   */
  const [users, setUsers] = useState(null);
  console.log(users);

  useEffect(() => {
    const fetchUsers = async (url) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('fetch Error');
        }
        const data = await res.json();
        setUsers(data);
        
      } catch(err) {
        console.log(err);
      }
    };
    fetchUsers(url);
  }, []);

  const userHeader = ['id', 'name', 'email', 'avatar'];
  return (
    <div className="App">
      {users && <DataTable headers={userHeader} rows={users?.data} />}
    </div>
  );
}

export default App;
