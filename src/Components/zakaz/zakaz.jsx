import React from 'react';
import '../zakaz';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class Zakaz extends React.Component{
    render(){
    return (

        <nav>
        
        <div className="Spisok">
            <NavLink to="/vakansii" className="Elem"> Вакансии</NavLink><br/>
            <NavLink to="/zayavki" className="Elem"> Заявки</NavLink><br/>
            <NavLink to="/dimitrovgrad/" className="Elem"> Студенты</NavLink><br/>
        </div>  
    </nav> 
    );
    }
}

export default Zakaz;