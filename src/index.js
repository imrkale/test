import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavWrapper from './routes/navWrapper'
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './containers/list/stateProvider'
import reducer, { initState } from './containers/list/reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initState} reducer={reducer}>
      <NavWrapper />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
