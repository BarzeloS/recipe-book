import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (

        <div className="header sticky-top">

            <nav className="navbar navbar-expand-lg navbar-dark homenav">
                <div className="container">
                    <Link className="navbar-brand" to="/" style={{ fontSize: '26px', color: '#bbd8c0' }}>
                        <img src="/images/tfr-logo.png" width="40" height="40"
                            className="d-inline-block align-top mr-3" alt="" loading="lazy" />
                            Thai Food Recipes</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active hnav">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item hnav">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item hnav">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item hnav">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Blog</a>
                            </li>
                            <li className="nav-item hnav">
                                <Link className="nav-link" to="/account">Account</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default HeaderComponent;