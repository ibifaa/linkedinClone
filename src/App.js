import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     {/* <h1>LinkedIn clone</h1> */}

     {/* Header */}
     <Header />

     <main>
     <Sidebar />
     {/* Feeds */}
     {/* Widget */}

     </main>

    
    </div>
  );
}

export default App;
