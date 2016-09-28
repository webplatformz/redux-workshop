import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TodoApp from './reducers';

let store = createStore(TodoApp);

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);