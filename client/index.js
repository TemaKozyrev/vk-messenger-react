import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

const store = configureStore()

import App from './containers/App.jsx';

render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
)