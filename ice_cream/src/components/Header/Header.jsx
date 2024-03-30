import React from 'react';
import icecreamlogo from '../../assets/images/icecream logo.svg';
import reactlogo from '../../assets/images/React logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <h1 style={{fontSize:'30px', color:'green'}}>IceCream Sundae</h1>
                    </div>
                    
                <div className="textRight">
                    <img src={reactlogo} alt="React" className={classes.Reactlogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
};

export default Header;
