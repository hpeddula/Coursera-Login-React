import Login from './Login.jsx';
import Walter from './Walter.js';
import Home from './Home';
import { Switch, Route, Router } from 'react-router-dom';
import React from 'react';
const Body = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/walter" component={Walter} />
        </Switch>
    </div>
)
export default Body;