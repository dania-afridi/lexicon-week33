import React from 'react';
import '../src/styles/App.css';
import '../src/styles/Components.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Marketplace from './pages/Marketplace';

function App() {
  return (
      <div className="App">
      
      <Navbar/>
      <Banner />
      <Marketplace/>

    </div>
  );
}

export default App;
