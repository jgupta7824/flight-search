import React, { Component } from 'react'
import { Redirect, Route,Switch } from 'react-router-dom';
import FlightSearch from '../containers/FlightSearch/FlightSearch';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/flights" />
                </Route>
                <Route path="/flights" exact render={props => {
                    return (<FlightSearch {...props} />)
                }} />
            </Switch>
        )
    }
}

export default Routes