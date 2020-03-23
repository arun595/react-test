import React from 'react';
import {mount} from 'enzyme';
import commentsReducer from 'Reducers/Comments';
import {SAVE_COMMENT} from 'actions/types';

it('handle actions of type SAVE_COMMENT',()=>{

    const action = {
        type:SAVE_COMMENT,
        payload:"new comment"
    };

    const newState = commentsReducer({},action);
    expect(newState).toEqual(['new comment']);
});

