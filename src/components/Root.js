import React from 'react';
import allReducers from '../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const Root = () => {
    return (
    <Provider store={store}>
        <App />
    </Provider>
    );
};