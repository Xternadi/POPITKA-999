import React from 'react';
import './LeftBar.css';

class LeftBar extends React.Component{
    render(){
    return (
        <div className='LeftBar'>
            <h1 className="Zagolovok">Навигация</h1>
        <div className="Spisok">
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
        </div>  
    </div> 
    );
    }
}

export default LeftBar;