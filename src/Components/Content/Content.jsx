import React from 'react';
import './Content.css';
import Dannie from './dannie';
import Portfolio from '../portfolio/portfolio';
import {BrowserRouter, Route} from "react-router-dom";


class Content extends React.Component{
    render(){
    return (
        <BrowserRouter>
        <div className='Content'>
            <Route path="/dannie" component={Dannie}/>
            <Route path="/choose" component={Portfolio}/>
          <BrowserRouter/>
    </div> 
    </BrowserRouter>
    );
    }
}

export default Content;