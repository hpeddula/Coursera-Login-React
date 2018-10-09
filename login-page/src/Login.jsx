import React, { Component } from 'react';
import './Login.css'
import $ from 'jquery';
export default class Login extends React.Component {
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-box">
                    <button data-toggle="tooltip" data-placement="bottom" title="Login" className="btn btn-success">Login</button>
                </div>
            </div>
        );
    }
}