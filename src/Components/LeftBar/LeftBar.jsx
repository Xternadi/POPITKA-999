import React from 'react';
import './LeftBar.css';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class LeftBarGorod extends React.Component{
    render(){
    return (
        <BrowserRouter>
        <nav className='LeftBar'>
            <h1 className="Zagolovok">Город</h1>
        <div className="Spisok">
            <NavLink to="/Dimitrovgrad" className="Elem"> Димитровград</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 1</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 2</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 3</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 4</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 5</NavLink><br/>
            <NavLink to="/" className="Elem"> Город 6</NavLink><br/>
        </div>  
    </nav> 
    </BrowserRouter>
    );
    }
}

export default LeftBarGorod;