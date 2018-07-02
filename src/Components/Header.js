import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav className="Nav">
                <div className="Wrapper">
                    <ul className="Nav-links">
                        <li>
                            <NavLink to="/" exact activeStyle={
                                { color:'#00BCD4' }
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/repos" exact activeStyle={
                                { color:'#00BCD4' }
                            }>Repositories</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;