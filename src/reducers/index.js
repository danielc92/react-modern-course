import {combineReducers} from 'redux';

const dummyReducer = () => {
  return [
    {
      name: "daniel"
    }, {
      name: "jennifer"
    }, {
      name: "jorge"
    }
  ]
}

export const rootReducer = combineReducers({
    dummy: dummyReducer
})
