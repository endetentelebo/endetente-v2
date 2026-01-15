import React, { useState } from 'react';
import './App.css';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Max en détente - EnDétente</h1>
        <p>Plateforme de fonctionnalités premium</p>
      </header>
      
      <main>
        <AdminPanel />
      </main>
    </div>
  );
}

export default App;