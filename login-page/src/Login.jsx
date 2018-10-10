import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from '@material-ui/core/styles/index';
import { withStyles } from '@material-ui/core/styles';
import './Login.css'
import $ from 'jquery';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    render() {
        const { classes } = this.props;
        const tooltip =
        `<div class="tooltip-inner login-tooltip">
            <div class="MuiFormControl-root-1 MuiFormControl-marginNormal-2">
                <label class="MuiFormLabel-root-12 MuiInputLabel-root-5 MuiInputLabel-formControl-6 MuiInputLabel-animated-9" data-shrink="false" for="standard-name">Name</label>
                    <div class="MuiInputBase-root-32 MuiInput-root-19 MuiInput-underline-23 MuiInputBase-formControl-33 MuiInput-formControl-20">
                        <input aria-invalid="false" class="MuiInputBase-input-42 MuiInput-input-27" id="standard-name" type="text" value="">
                    </div>
            </div>
        </div>`
        const template =
            `<div class="template"></div>`
        return (
            <div className="container-fluid login-parent">
                <div className="row">
                    <div className="col-sm-4 col-lg-4"></div>
                    <div className="col-sm-4 col-lg-4 text-center login">
                        <button data-toggle="tooltip" data-placement="bottom" data-trigger="hover" data-html="true" title={tooltip.toString()} className="btn btn-success sign-in">Login</button>
                        <button data-toggle="tooltip" data-placement="bottom" title="Sign-Up" className="btn btn-primary sign-up">Sign Up</button>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                    <TextField
          id="standard-name"
          label="Name"
          margin="normal"
        />
                    </div>
                </div>
            </div>
        );
    }
}