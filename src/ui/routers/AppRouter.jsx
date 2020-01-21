import React from 'react'
import * as routers from './router'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HOME from '../../ui/pages/home'

function AppRouter(props) {
    return (
        <Router>
            <Switch>
                <Route exact path={routers.HOME} component={HOME}></Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
