import logo from './logo.svg';
import React from "react"
import Header from './Comps/Header'
import ToDo from './Comps/ToDo'

function App() {
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
