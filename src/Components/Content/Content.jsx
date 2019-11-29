import React from 'react';
import './Content.css';
import DannieDITIProg from '../LeftBar/Dimitrovgrad/DITI/Prog/dannieDITIProg';
import DannieDITIEc from '../LeftBar/Dimitrovgrad/DITI/Ec/dannieDITIEc';
import DannieDITIRad from '../LeftBar/Dimitrovgrad/DITI/Rad/dannieDITIRad';
import DannieDTKAuto from '../LeftBar/Dimitrovgrad/DTK/Auto/dannieDTKAuto';
import DannieDTKEl from '../LeftBar/Dimitrovgrad/DTK/El/dannieDTKEl';
import DannieDTKProg from '../LeftBar/Dimitrovgrad/DTK/Prog/dannieDTKProg';
import DannieMolBank from '../LeftBar/Dimitrovgrad/Molochka/Bank/dannieMolBank';
import DannieMolHolod from '../LeftBar/Dimitrovgrad/Molochka/Holod/dannieMolHolod';
import DannieMolUrist from '../LeftBar/Dimitrovgrad/Molochka/Urist/dannieMolUrist';
import Portfolio from '../portfolio/portfolio';
import {BrowserRouter, Route} from "react-router-dom";
import Zagruzka from './Zagruzka';
import portfolioDTKAuto from '../LeftBar/Dimitrovgrad/DTK/Auto/portfolioDTKAuto';


class Content extends React.Component{
    render(){
    return (
        <BrowserRouter>
        <div className='Content'>
        <Route exact path="/" component={Zagruzka}/>
            <Route exact path="/dimitrovgrad/DITI/Prog" component={DannieDITIProg}/>
            <Route exact path="/dimitrovgrad/DITI/Ec" component={DannieDITIEc}/>
            <Route exact path="/dimitrovgrad/DITI/Rad" component={DannieDITIRad}/>
            <Route exact path="/dimitrovgrad/DTK/Auto" component={DannieDTKAuto}/>
            <Route exact path="/dimitrovgrad/DTK/El" component={DannieDTKEl}/>
            <Route exact path="/dimitrovgrad/DTK/Prog" component={DannieDTKProg}/>
            <Route exact path="/dimitrovgrad/Molochka/Bank" component={DannieMolBank}/>
            <Route exact path="/dimitrovgrad/Molochka/Holod" component={DannieMolHolod}/>
            <Route exact path="/dimitrovgrad/Molochka/Urist" component={DannieMolUrist}/>
            <Route exact path="/dimitrovgrad/DITI/Prog/choose" component={Portfolio}/>
            <Route path="/dimitrovgrad/DTK/Auto/Choosen" component={portfolioDTKAuto}/>
    </div>
    </BrowserRouter> 
    );
    }
}

export default Content;