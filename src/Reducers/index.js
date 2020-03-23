import {combineReducers} from 'redux';
import commentReducer from 'Reducers/Comments';

export default combineReducers({
    comments:commentReducer
});

