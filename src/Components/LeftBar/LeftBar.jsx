import React from 'react';
import './LeftBar.css';

class LeftBar extends React.Component{
    render(){
    return (
        <div className='LeftBar'>
            <h1 className="Zagolovok">Навигация</h1>
        <ul type="disk" className="Spisok">
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
            <li>Элемент 1</li>
        </ul>  
    </div> 
    );
    }
}

export default LeftBar;