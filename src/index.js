import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './GlobalStyle';
import {IconsStyle} from './static/iconfont/iconfont';
const AppWithStyle = () => {
  return (
    <Fragment>
      <App />
      <GlobalStyle />
      <IconsStyle />
    </Fragment>
  );
};
ReactDOM.render(<AppWithStyle />, document.getElementById('root'));
