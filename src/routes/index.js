import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Find from '../pages/find';
import Video from '../pages/video';
import Mine from '../pages/mine';
import Friend from '../pages/friend';
import Acount from '../pages/acount';
export default [
  <Route exact path="/find" component={Find} key="/find" />,
  <Route exact path="/video" component={Video} key="/video" />,
  <Route exact path="/mine" component={Mine} key="/mine" />,
  <Route exact path="/friend" component={Friend} key="/friend" />,
  <Route exact path="/acount" component={Acount} key="/acount" />,
  <Redirect from="/" to="/find" exact key="redirect" />
];
