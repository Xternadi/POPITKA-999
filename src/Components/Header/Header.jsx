import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='golova'>
                <div className="shapka">
                    <div className="Login">
                        <div className="Autoriz">Договора</div>
                        <div className="Autoriz">Работодатели</div>
                        <div className="Autoriz">Организация</div>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;