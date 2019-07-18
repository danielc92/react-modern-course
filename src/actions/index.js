import { combineReducers } from 'redux';

const dummyReducer (initialState, action) {
    return [
        {name: "daniel"}, {name:"jennifer"}, {name:"jorge"}
    ]
}

const rootReducer = combineReducers({
    dummy: dummyReducer
})

export default rootReducer