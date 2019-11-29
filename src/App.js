import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LeftBar from './Components/LeftBar/LeftBar';
import Content from './Components/Content/Content';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import LeftBarUchrezh from './Components/LeftBar/Type/ViborUchred';
import LeftBarSpecDITI from './Components/LeftBar/Type/ViborSpec';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
     {/* <Route exact path="/" component={LeftBarGorod}></Route>
    <Route exact path="/Dimitrovgrad" component={LeftBarUchrezh}/>
    <Route exact path="/Dimitrovgrad/DITI" component={LeftBarSpecDITI}/>
  <Route path="/Dimitrovgrad/DITI/Prog" component={LeftBarSpecDITI}/>*/}
     <LeftBar/>
     <Content/>
    </div>
    </BrowserRouter>
  );
}

export default App;
