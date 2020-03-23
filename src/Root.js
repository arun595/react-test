import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'Reducers';

import React from 'react';

const Root = (props) => {
    return (
        <Provider store={createStore(reducers,{})}>
            {props.children}
        </Provider>
    );
};

export default Root;