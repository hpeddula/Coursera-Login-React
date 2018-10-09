import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './Pdf.css'
export default class Pdf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 10
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <Grid>
                <div className="box">
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Select  value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </Col>
                        <Col xs={12} md={4} className="custom-text">
                            <Select  value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </Col>
                        <Col xs={12} md={4}>
                            <Select  value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </Col>
                    </Row >
                    <button className="btn btn-secondary">This one is using Bootstrap</button>
                </div>
            </Grid >
        )
    }
}