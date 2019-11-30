import React from 'react';
import './Content.css';
import DannieDITIProg from '../LeftBar/Dimitrovgrad/DITI/Prog/dannieDITIProg';
import DannieDITIEc from '../LeftBar/Dimitrovgrad/DITI/Ec/dannieDITIEc';
import DannieDITIRad from '../LeftBar/Dimitrovgrad/DITI/Rad/dannieDITIRad';
import DannieDTKAuto from '../LeftBar/Dimitrovgrad/DTK/Auto/dannieDTKAuto';
import DannieDTKEl from '../LeftBar/Dimitrovgrad/DTK/El/dannieDTKEl';
import DannieDTKProg from '../LeftBar/Dimitrovgrad/DTK/Prog/dannieDTKProg';
import DannieMolBank from '../LeftBar/Dimitrovgrad/Mol/Bank/dannieMolBank';
import DannieMolHolod from '../LeftBar/Dimitrovgrad/Mol/Holod/dannieMolHolod';
import DannieMolUrist from '../LeftBar/Dimitrovgrad/Mol/Urist/dannieMolUrist';
import Portfolio from '../portfolio/portfolio';
import {BrowserRouter, Route} from "react-router-dom";
import Zagruzka from './Zagruzka';
import portfolioDTKAuto from '../LeftBar/Dimitrovgrad/DTK/Auto/portfolioDTKAuto';
import portfolioDTKEl from '../LeftBar/Dimitrovgrad/DTK/El/portfolioDTKEl';
import portfolioDTKProg from '../LeftBar/Dimitrovgrad/DTK/Prog/portfolioDTKProg';
import portfolioDITIEc from '../LeftBar/Dimitrovgrad/DITI/Ec/portfolioDITIEc';
import portfolioDITIProg from '../LeftBar/Dimitrovgrad/DITI/Prog/portfolioDITIProg';
import portfolioDITIRad from '../LeftBar/Dimitrovgrad/DITI/Rad/portfolioDITIRad';
import portfolioMolBank from '../LeftBar/Dimitrovgrad/Mol/Bank/portfolioMolBank';
import portfolioMolHolod from '../LeftBar/Dimitrovgrad/Mol/Holod/portfolioMolHolod';
import portfolioMolUrist from '../LeftBar/Dimitrovgrad/Mol/Urist/portfolioMolUrist';


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
            <Route exact path="/dimitrovgrad/Mol/Bank" component={DannieMolBank}/>
            <Route exact path="/dimitrovgrad/Mol/Holod" component={DannieMolHolod}/>
            <Route exact path="/dimitrovgrad/Mol/Urist" component={DannieMolUrist}/>
            <Route exact path="/dimitrovgrad/DITI/Prog/choose" component={Portfolio}/>
            <Route path="/dimitrovgrad/DTK/Auto/Choosen" component={portfolioDTKAuto}/>
            <Route path="/dimitrovgrad/DTK/El/Choosen" component={portfolioDTKEl}/>
            <Route path="/dimitrovgrad/DTK/Prog/Choosen" component={portfolioDTKProg}/>
            <Route path="/dimitrovgrad/DITI/Ec/Choosen" component={portfolioDITIEc}/>
            <Route path="/dimitrovgrad/DITI/Prog/Choosen" component={portfolioDITIProg}/>
            <Route path="/dimitrovgrad/DITI/Rad/Choosen" component={portfolioDITIRad}/>
            <Route path="/dimitrovgrad/Mol/Bank/Choosen" component={portfolioMolBank}/>
            <Route path="/dimitrovgrad/Mol/Holod/Choosen" component={portfolioMolHolod}/>
            <Route path="/dimitrovgrad/Mol/Urist/Choosen" component={portfolioMolUrist}/>
    </div>
    </BrowserRouter> 
    );
    }
}

export default Content;