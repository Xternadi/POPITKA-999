import React from 'react';
import './Content.css';
import photo from './photo.jpg';

class Content extends React.Component{
    render(){
    return (
        <div className='Content'>
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div>  
    </div> 
    );
    }
}

export default Content;