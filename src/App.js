import React from 'react';
import './App.css';
import API from './components/API';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <div>
      <span>Hello, App!</span>
      <StarWarsProvider>
        <API />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
