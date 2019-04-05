import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = (props) => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            <ul className="sidenav" id="nav-mobile">
            <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks