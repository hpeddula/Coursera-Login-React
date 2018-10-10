import React, { Component } from 'react';
import './Login.css'
import $ from 'jquery';
export default class Login extends React.Component {
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    render() {
        const tooltip=
        `<div class="login-tooltip">
            <h2 class="text-danger">Trying to load Html through tooltip</h2>
        </div>`
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 col-lg-4"></div>
                    <div className="col-sm-4 col-lg-4 text-center login-box">
                        <button data-toggle="tooltip" data-placement="bottom" data-trigger="hover" data-html="true"  title={tooltip.toString()} className="btn btn-success sign-in">Login</button>
                        <button data-toggle="tooltip" data-placement="bottom" title="Sign-Up" className="btn btn-primary sign-up">Sign Up</button>
                    </div>
                    <div className="col-sm-4 col-lg-4"></div>
                </div>
            </div>
        );
    }
}