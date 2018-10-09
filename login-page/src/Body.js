import Login from './Login.jsx';
import Walter from './Walter.js';
import Home from './Home.js';
import Pdf from './Pdf.js'
import { Switch, Route, Router } from 'react-router-dom';
import React from 'react';
const Body = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/walter" component={Walter} />
            <Route path="/pdf" component={Pdf} />
        </Switch>
    </div>
)
export default Body;