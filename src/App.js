import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LeftBar from './Components/LeftBar/LeftBar';
import Content from './Components/Content/Content';


function App() {
  return (
    <div className="App">
      <Header/>
      <LeftBar/>
      <Content/>
    </div>
  );
}

export default App;
