import React from 'react';
import './App.css';
import API from './components/API';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import Inputs from './components/Inputs';

function App() {
  return (
    <div>
      <span>Hello, App!</span>
      <StarWarsProvider>
        <API />
        <Table />
        <Inputs />
      </StarWarsProvider>
    </div>
  );
}

export default App;
