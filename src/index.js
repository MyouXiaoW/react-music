import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ResetStyle, IconsStyle} from 'Static/style';

const AppWithStyle = () => {
  return (
    <Fragment>
      <App />
      <ResetStyle />
      <IconsStyle />
    </Fragment>
  );
};
ReactDOM.render(<AppWithStyle />, document.getElementById('root'));
