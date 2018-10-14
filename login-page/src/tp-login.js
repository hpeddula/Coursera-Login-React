import React from 'react';
import './tp-login.css';
import TextField from '@material-ui/core/TextField';
export default class TpLogin extends React.Component {
    constructor(props) {
        super(props)
        {
            this.email;
            this.pwd;
            this.redirectToWalter = this.redirectToWalter.bind(this);
            this.pdf = this.pdf.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    }
    redirectToWalter() {
        this.props.history.push("/walter?heisenberg=true");
    }
    pdf() {
        this.props.history.replace("/pdf");
    }
    handleSubmit(e) {
        console.log(this.email.value, this.pwd.value);
    }
    render() {
        return (
            <div className="p-login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <div className="card sha">
                                <div className="card-header text-center">
                                    <h4 className="tp-font">TPX - Login</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group" htmlFor="email">
                                            <TextField id="email" label="Email" margin="normal" fullWidth={true} placeholder="Email" inputProps={{
                                                ref: (node) => { this.email = node; },
                                            }}
                                                helperText="Enter an Email" error={true} />
                                        </div>
                                        <div className="form-group" htmlFor="pwd">
                                            <TextField id="pwd" label="Password" type="password" fullWidth={true} inputProps={{
                                                ref: (node) => { this.pwd = node; },
                                            }} autoComplete="current-password" margin="normal" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btns btn-block" onClick={this.pdf}> Sign-In</button>
                                    <button className="btn btns btn-block" onClick={this.redirectToWalter}> Sign-Up</button>
                                    <input className="btn btn-primary btn-block" onClick={this.handleSubmit} type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}