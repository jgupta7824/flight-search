
import React, { Fragment } from "react";
import classes from './Header.module.css';
import TRANSLATIONS from '../../utils/translations';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className={classes.header}>
                <h1 >{TRANSLATIONS.HEADER_HEADING}</h1>
                <nav className="nav">
                    <NavLink to="/flights" className="navLink " activeClassName="navLinkActive">
                        <i className="fas fa-plane-departure iconPadding"></i>
                        <span className="navText">Flights</span>
                    </NavLink>
                    <a href="true" className="navLink disabled">
                        <i className="fas fa-hotel iconPadding"></i>
                        <span className="navText">Hotels</span>
                    </a>
                    <a href="true" className="navLink disabled">
                        <i className="fas fa-car iconPadding"></i>
                        <span className="navText">Cars</span>
                    </a>
                    <a href="true" className="navLink disabled">
                        <i className="fab fa-font-awesome-flag iconPadding"></i>
                        <span className="navText">Activity</span>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header;