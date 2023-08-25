import { Users } from "./users";
import React, { useState } from 'react';
import Table from "./Table.jsx"
import "./app.css"

function App() {
  const [query, setQuery] = useState("")
  const keys = ["first_name", "last_name", "email"]
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    )
  }
  return (
    <div className="app">
      <input onChange={(e) => setQuery(e.target.value)} type="text" className="search" placeholder="Search..."></input>
      <Table data={search(Users)} />
    </div>
  );
}

export default App;