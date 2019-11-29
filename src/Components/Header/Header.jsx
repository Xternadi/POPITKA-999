import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='golova'>
                <div className="shapka">
                    <div className="Login">
                        <div className="Autoriz">Авторизация:</div>
                        <div className="LoginUch">Учреждение</div>
                        <div className="LoginRab">Работодатель</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;