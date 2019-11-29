import React from 'react';
import '../LeftBar.css';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class LeftBarUchrezh extends React.Component{
    render(){
    return (
        
        <nav>
                    <h1 className="Zagolovok">Учреждение</h1>
        <div className="Spisok">
        <NavLink to="/" className="Elem Nazad"> Назад</NavLink><br/>
            <NavLink to="/dimitrovgrad/DITI" className="Elem"> ДИТИ НИЯУ МИФИ</NavLink><br/>
            <NavLink to="/dimitrovgrad/DTK" className="Elem"> ДТК</NavLink><br/>
            <NavLink to="/dimitrovgrad/Mol" className="Elem"> Молочка</NavLink><br/>
        </div>  
    </nav> 
    );
    }
}

export default LeftBarUchrezh;