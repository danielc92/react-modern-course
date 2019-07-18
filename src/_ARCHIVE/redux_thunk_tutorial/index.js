import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


import {rootReducer} from './reducers'
import App from './components/App';

const middlewares = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer,
    middlewares,
    )

ReactDOM.render(<Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'))

