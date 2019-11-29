import React from 'react';
import './Content.css';
import photo from './photo.jpg';

class Dannie extends React.Component{
    render(){
    return (
        <div>
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
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
    </div> 
    );
    }
}

export default Dannie;