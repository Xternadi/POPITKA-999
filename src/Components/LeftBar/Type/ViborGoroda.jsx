import React from 'react';
import '../LeftBar.css';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class LeftBarVibor extends React.Component{
    render(){
    return (

        <nav>
        <h1 className="Zagolovok">Город</h1>
        <div className="Spisok">
            <NavLink to="/dimitrovgrad" className="Elem"> Димитровград</NavLink><br/>
        </div>  
    </nav> 
    );
    }
}

export default LeftBarVibor;