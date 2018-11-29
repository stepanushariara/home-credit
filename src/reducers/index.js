import {combineReducers} from 'redux';
import ReducerIndex from './indexReducer';

const rootReducer = combineReducers({
    data: ReducerIndex,
});

export default rootReducer;
