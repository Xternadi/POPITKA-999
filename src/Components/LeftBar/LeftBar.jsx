import React from 'react';
import './LeftBar.css';
import {NavLink, Route, BrowserRouter, Link} from "react-router-dom";
import LeftBarUchrezh from './Type/ViborUchred';
import LeftBarSpecDITI from './Dimitrovgrad/DITI/ViborSpecDITI';
import LeftBarSpecDTK from './Dimitrovgrad/DTK/ViborSpecDTK';
import LeftBarSpecMol from './Dimitrovgrad/Molochka/ViborSpecMol';
import LeftBarVibor from './Type/ViborGoroda';


class LeftBar extends React.Component{
    render(){
    return (
        <BrowserRouter>
        <div className='LeftBar'>
    <Route exact path="/" component={LeftBarVibor}/>
    <Route exact path="/Dimitrovgrad" component={LeftBarUchrezh}/>
    <Route path="/Dimitrovgrad/DITI" component={LeftBarSpecDITI}/>
    <Route path="/Dimitrovgrad/DTK" component={LeftBarSpecDTK}/>
    <Route path="/Dimitrovgrad/Mol" component={LeftBarSpecMol}/>    
        {/*<nav className='LeftBar'>
            <h1 className="Zagolovok">Город</h1>
            
        <div className="Spisok">
            <NavLink to="/Dimitrovgrad"  className="Elem"> Димитровград</NavLink><br/>
            <NavLink to="/Choose" className="Elem"> Город 1</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 2</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 3</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 4</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 5</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 6</NavLink><br/>
        </div>  
    </nav> */}
    </div>
    </BrowserRouter>
    );
    }
}

export default LeftBar;