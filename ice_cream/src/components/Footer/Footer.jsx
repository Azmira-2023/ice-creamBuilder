import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={['container', classes.container].join(' ')}>
                <div> &copy;2023.</div>
                <div className="textRight">
                    Made with <span className="red">&hearts;</span> by
                    <a href="https://reactjs.org/docs/create-a-new-react-app.html">
                        Ajmira
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
