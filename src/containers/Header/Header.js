
import React, { Fragment } from "react";
import classes from './Header.module.css';
import TRANSLATIONS from '../../utils/translations';

const Header = (props) => {
    return (
        <header>
            <div className={classes.header}>
                <h1 >{TRANSLATIONS.HEADER_HEADING}</h1>
                <nav className="nav">
                    <a href className="navLink navLinkActive">
                        <i className="fas fa-plane-departure iconPadding"></i>
                        <span className="navText">Flights</span>
                    </a>
                    <a href className="navLink disabled">
                        <i className="fas fa-hotel iconPadding"></i>
                        <span className="navText">Hotels</span>
                    </a>
                    <a href className="navLink disabled">
                        <i className="fas fa-car iconPadding"></i>
                        <span className="navText">Cars</span>
                    </a>
                    <a href className="navLink disabled">
                        <i className="fab fa-font-awesome-flag iconPadding"></i>
                        <span className="navText">Activity</span>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header;