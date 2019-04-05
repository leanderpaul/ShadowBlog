import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {
    let { user, logout } = props
    let links, profileIcon = '';
    if (user) {
        links = <SignedInLinks logout={logout} user={user} />
        profileIcon = <a href="/"
            className="btn btn-floating pink lighten-1">L</a>
    } else {
        links = <SignedOutLinks />
    }
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <a className="sidenav-trigger left nav-slider hide-on-large" data-target="nav-mobile">
                    <FontAwesomeIcon icon="align-justify" size="lg" />
                </a>
                <Link to='/' className="brand-logo">Shadow Blog</Link>
                <div className="right nav">
                {profileIcon}
                </div>
                {links}
            </div>
        </nav>
    )
}

export default Navbar;