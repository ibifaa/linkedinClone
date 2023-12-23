import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feeds/Feed';

function App() {
  return (
    <div className="App">
     {/* <h1>LinkedIn clone</h1> */}

     {/* Header */}
     <Header />

     <main>
     <Sidebar />
     <Feed  />
     {/* Widget */}

     </main>

    
    </div>
  );
}

export default App;
