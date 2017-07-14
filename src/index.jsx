import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store/store'
import { App } from './components/App'
import showResults from './showResults/showResults'
import SimpleForm from './simpleForm/simpleForm';

const rootEl = document.getElementById('container');

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    rootEl,
);
