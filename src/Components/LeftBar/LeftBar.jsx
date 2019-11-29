import React from 'react';
import './LeftBar.css';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class LeftBar extends React.Component{
    render(){
    return (
        <BrowserRouter>
        <nav className='LeftBar'>
            <h1 className="Zagolovok">Навигация</h1>
        <div className="Spisok">
            <NavLink to="/dannie" className="Elem"> Элемент 1</NavLink><br/>
            <NavLink to="/dannie" className="Elem"> Элемент 1</NavLink><br/>
            <NavLink to="/dannie" className="Elem"> Элемент 1</NavLink><br/>
            <NavLink to="/dannie" className="Elem"> Элемент 1</NavLink><br/>
            <NavLink to="/dannie" className="Elem"> Элемент 1</NavLink><br/>
            <NavLink to="/dannie" className="Elem"> Элемент 1</NavLink><br/>
            <NavLink to="/dannie" className="Elem"> Элемент 1</NavLink><br/>
        </div>  
    </nav> 
    </BrowserRouter>
    );
    }
}

export default LeftBar;