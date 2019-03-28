import React, { Component } from 'react';
import './App.css';
import ListsContainer from './components/ListsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Ruby API + Create-React-App-2 + PostgresQL
          </h1>
          <h3> CRUD for Simple List having Items with a title and excerpt </h3>
        </header>
        <ListsContainer />
      </div>
    );
  }
}

export default App;
