import React from 'react';
import './Content.css';
import Dannie from './dannie';
import Portfolio from '../portfolio/portfolio';
import {BrowserRouter, Route} from "react-router-dom";
import Zagruzka from './Zagruzka';
import Zakaz from '../zakaz/zakaz';


class Content extends React.Component{
    render(){
    return (
        <BrowserRouter>
        <div className='Content'>
        <Route exact path="/" component={Zagruzka}/>
            <Route exact path="/dimitrovgrad/DITI/Prog" component={Dannie}/>
            <Route exact path="/dimitrovgrad/rabotadatel" component={Zakaz}/>
            <Route exact path="/dimitrovgrad/DITI/Prog/choose" component={Portfolio}/>
            
    </div>
    </BrowserRouter> 
    );
    }
}

export default Content;