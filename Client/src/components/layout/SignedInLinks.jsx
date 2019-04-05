import React from 'react'
import { NavLink } from 'react-router-dom';


const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/new-post">Create Post</NavLink></li>
                <li><a href="/login" onClick={props.logout}>Log Out</a></li>
            </ul>
            <ul className="sidenav" id="nav-mobile">
                <li><NavLink to="/new-post">Create Post</NavLink></li>
                <li><a href="/login" onClick={props.logout}>Log Out</a></li>
            </ul>
        </div>
    )
}

export default SignedInLinks