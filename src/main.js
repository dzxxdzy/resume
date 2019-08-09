/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 16:58:56
 * @LastEditTime: 2019-08-08 16:58:56
 * @LastEditors: your name
 */

import React from 'react';
import ReactDOM from 'react-dom';
// import 'babel-polyfill';
import "./App.css";
import './index.css';
import App from './boot/setup';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
