import React, {Component} from 'react'
import { Route } from 'react-router'

import Home from './Home.jsx'

export default class App extends Component {
    render() {
        return <div>
            <Route path="/" component={Home}/>
        </div>
    }
}