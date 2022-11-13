import { combineReducers } from 'redux';
import jobs from './JobsReducer';

const rootReducer = combineReducers({
    jobs,
});

export default rootReducer;