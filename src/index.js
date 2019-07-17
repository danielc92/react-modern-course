import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { combineReducers } from 'redux';

ReactDOM.render(<App/>, document.getElementById('root'))



/*
STORE
  REDUCERS
  > Song list combineReducers
  > Selected song reducer

ACTION CREATORS
  > SELECT SONG
Provider --> App --> Connect --> SongList

*/