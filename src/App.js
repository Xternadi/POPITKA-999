import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LeftBarGorod from './Components/LeftBar/LeftBar';
import Content from './Components/Content/Content';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import LeftBarUchrezh from './Components/LeftBar/Type/Gorod';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Route path='/' component={LeftBarGorod}/>
    <Route path='/Dimitrovgrad' component={LeftBarUchrezh}/>
     {/* <LeftBar/>*/}
      <Content/>
    </div>
    </BrowserRouter>
  );
}

export default App;
