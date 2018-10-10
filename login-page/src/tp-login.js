import React from 'react';
import './tp-login.css';
import TextField from '@material-ui/core/TextField';
export default class TpLogin extends React.Component {
    render() {
        return (
            <div className="container-fluid p-login">
                <div className="row">
                    <div className="col-sm-4 col-lg-4">
                        <div className="card sha">
                            <div className="card-header text-center">
                                <h4 className="tp-font">TPX - Login</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group" htmlFor="email">
                                        <TextField id="email" label="Email" margin="normal" />
                                    </div>
                                    <div className="form-group" htmlFor="pwd">
                                        <TextField id="pwd" label="Password" type="password" autoComplete="current-password" margin="normal" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <button className="btn btns btn-block"> Sign-In</button>
                                <button className="btn btns btn-block"> Sign-Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                    </div>
                    <div className="col-sm-4 col-lg-4"></div>
                </div>
            </div>
        );
    }
}