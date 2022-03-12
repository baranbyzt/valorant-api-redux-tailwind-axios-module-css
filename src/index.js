import React from 'react';
import ReactDOM from 'react-dom';



import GetApi from './redux/GetApi';
import './style/GeneralStyle.css'

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import RootReducer from './redux/RoorReducer'
import thunk from 'redux-thunk'

const store = createStore(RootReducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <GetApi/>
</Provider>  ,
  document.getElementById('root')
);

