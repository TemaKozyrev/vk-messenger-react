import React, {Component} from 'react'
import { Route } from 'react-router'

import Home from './Home.jsx'
import Login from './Login.jsx'

export default class App extends Component {
    render() {
        return <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login/:token" component={Login}/>
        </div>
    }
}