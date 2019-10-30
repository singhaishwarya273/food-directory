







import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App';
import reducers from './reducers';

const store= createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
<Router>
<Provider store = {store}> 
<App />
</Provider>
</Router>,
document.querySelector('#root')
);

