import React from 'react';
import '../../LeftBar.css';
import {NavLink, Route, BrowserRouter} from "react-router-dom";

class LeftBarSpecMol extends React.Component{

    render(){
    return (

        <nav>
            <h1 className="Zagolovok">Специальность</h1>
        <div className="Spisok">
        <NavLink to="/dimitrovgrad" className="Elem Nazad"> Назад</NavLink><br/>
            <NavLink to="/dimitrovgrad/Mol/Bank" className="Elem"> Банковское дело</NavLink><br/>
            <NavLink to="/dimitrovgrad/Mol/Urist" className="Elem"> Юрист</NavLink><br/>
            <NavLink to="/dimitrovgrad/Mol/Holod" className="Elem"> Криотехник</NavLink><br/>
            <button onClick={this.Knop=()=> {window.location.reload()}} className="Elem filtr_ok"> Подтвердить</button><br/>
        </div> 
    </nav> 
    );
    }
}


export default LeftBarSpecMol;