import React from 'react';
import ReactDOM from 'react-dom';

// our root file
import GetApi from './redux/GetApi';
// our general css file
import './style/GeneralStyle.css'
// redux provider
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
// our combine Reducers
import RootReducer from './redux/RoorReducer'
import thunk from 'redux-thunk'
// our store
const store = createStore(RootReducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <GetApi/>
</Provider>  ,
  document.getElementById('root')
);

