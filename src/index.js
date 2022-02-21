import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import RoutesJS from './RoutesJS';

ReactDOM.render(
  <>
    <GlobalStyle />
    <RoutesJS />
  </>,
  document.getElementById('root')
);
