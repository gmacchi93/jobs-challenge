import { combineReducers } from 'redux';
import jobs from './JobsReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
    jobs,
    status
});

export default rootReducer;