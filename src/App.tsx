import React from 'react';
import './App.css';

import Beer from './componentes/Beer'
import Food from './componentes/Food'

function App() {
  return (
    <div className="App">
      <Food />
      <Beer />
    </div>
  );
}


export default App;