import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


import { MDCRipple } from '@material/ripple/index';
const ripple = new MDCRipple(document.querySelector('.foo-button'));
//ReactDOM.render(<App />, document.getElementById('root'))