import React from "react";
import List from '../List/List.js'
// import Card from '../Card/Card.js'
import "./App.css";

function App() {
  return (
    <main className="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
        <List/>
        {/* <Card/> */}
      </header>
    </main>
  );
}

export default App;
