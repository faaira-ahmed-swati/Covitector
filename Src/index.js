// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { AppContainer, Home } from './Components/Upload';

// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { reducer } from './reducers/reducer';
// import thunk from 'redux-thunk';

// import {
//   Router,
//   Route,
//   Routes,
//   IndexRoute,
//   browserHistory,
// } from 'react-router';
// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
    <App/>
  </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,

//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
