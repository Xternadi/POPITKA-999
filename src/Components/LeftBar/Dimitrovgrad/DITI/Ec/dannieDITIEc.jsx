import React from 'react';
import '../../../../Content/Content.css';
import {NavLink} from 'react-router-dom';

class DannieProgEc extends React.Component{
    render(){
    return (
        <div>
          <NavLink to="/dimitrovgrad/DITI/Prog/Choose"><div className="block">
              <div className="Photo"><div className="Photo" /></div>
              <div className="FIO">Иванова Елена Ивановна</div></div>
          </NavLink>  
          {/*<div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
    </div> */}
    </div> 
    );
    }
}

export default DannieProgEc;