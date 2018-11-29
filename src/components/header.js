import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import Logo from '../logo.svg';
export default class Header extends Component{
    componentDidMount(){
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
                <Link className="navbar-brand" to={'/'}><img src={Logo} alt='Logo'/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/people'}>People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/location'}>Location</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/species'}>Species</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/vehicle'}>Vehicle</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
