import React from 'react';
import '../../LeftBar.css';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class LeftBarSpecDTK extends React.Component{

    render(){
    return (

        <nav>
            <h1 className="Zagolovok">Специальность</h1>
        <div className="Spisok">
            <NavLink to="/dimitrovgrad/DTK/Prog" className="Elem"> Программирование</NavLink><br/>
            <NavLink to="/dimitrovgrad/DTK/Auto" className="Elem"> Автомеханник</NavLink><br/>
            <NavLink to="/dimitrovgrad/DTK/El" className="Elem"> Автоэлектрик</NavLink><br/>
            <button onClick={this.Knop=()=> {window.location.reload()}} className="Elem filtr_ok"> Подтвердить</button><br/>
        </div> 
    </nav> 
    );
    }
}


export default LeftBarSpecDTK;