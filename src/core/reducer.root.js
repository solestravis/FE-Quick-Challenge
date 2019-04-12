import { combineReducers } from 'redux';
import { dogsReducer } from './Dogs/reducer';
import { routerReducer } from 'react-router-redux';

export default function rootReducer () {
    return combineReducers({
        dogs: dogsReducer,
        router: routerReducer
    });
}
