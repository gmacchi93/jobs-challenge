import { combineReducers } from 'redux';
import jobs from './JobsReducer';
import applications from './ApplicationReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
    jobs,
    applications,
    status
});

export default rootReducer;