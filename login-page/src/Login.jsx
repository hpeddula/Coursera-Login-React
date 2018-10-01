import React, { Component } from 'react';
import { Grid, Button, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './Login.css'
export default class Login extends React.Component {
    render() {
        const signIn = (
            <Tooltip id="signIn">
                <div className="login-parent">
                    <div className="fb">
                        <Button className="btns" bsStyle="primary"><span><i className="fab fa-facebook-f"></i></span> Login Using Facebook</Button>
                    </div>
                </div>
            </Tooltip>
        );
        const signUp = (
            <Tooltip id="signUp">
                <h2>This is Sign Up Overlay</h2>
            </Tooltip>
        );
        return (
            <Grid>
                <div className="button-padding">
                    <Row className="show-grid">
                        <Col className="text-center" xs={12}>
                            <OverlayTrigger placement="bottom" overlay={signIn}>
                                <Button className="btns" bsStyle="success">Log-In</Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" overlay={signUp}>
                                <Button className="btns" bsStyle="success">Sign-Up</Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </div>
            </Grid>
        );
    }
}