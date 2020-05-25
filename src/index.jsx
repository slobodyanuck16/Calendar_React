import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './index.scss';
import App from './App'

const rootElem = document.querySelector('#root');

ReactDOM.render(<App />, rootElem);