import React from 'react';
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
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <Select value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </div>
                    <div className="col-sm-12 col-md-12">
                        <Select value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </div>
                    <div className="col-sm-12 col-md-12">
                        <Select value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </div>
                </div >
                <button className="btn btn-secondary">This one is using Bootstrap</button>
            </div>
        )
    }
}