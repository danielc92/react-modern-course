import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { rootReducer } from './reducers';

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))



/*
STORE
  REDUCERS
  > Song list combineReducers
  > Selected song reducer

ACTION CREATORS
  > SELECT SONG
Provider --> App --> Connect --> SongList
*/