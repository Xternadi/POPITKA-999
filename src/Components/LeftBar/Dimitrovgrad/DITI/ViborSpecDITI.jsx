import React from 'react';
import '../../LeftBar.css';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class LeftBarSpecDITI extends React.Component{

    render(){
    return (

        <nav>
            <h1 className="Zagolovok">Специальность</h1>
        <div className="Spisok">
        <NavLink to="/dimitrovgrad" className="Elem"> Назад</NavLink><br/>
            <NavLink to="/dimitrovgrad/DITI/Prog" className="Elem"> Программирование</NavLink><br/>
            <NavLink to="/dimitrovgrad/DITI/Rad" className="Elem"> Радиация</NavLink><br/>
            <NavLink to="/dimitrovgrad/DITI/Ec" className="Elem"> Экономика</NavLink><br/>
            <button onClick={this.Knop=()=> {window.location.reload()}} className="Elem filtr_ok"> Подтвердить</button><br/>
        </div> 
    </nav> 
    );
    }
}



export default LeftBarSpecDITI;