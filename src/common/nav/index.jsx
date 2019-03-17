import React from 'react';
import {Nav, NavItem} from './style';
import {Link} from 'react-router-dom';
const NAV_SET = [
  {id: 1, icon: <i className="iconfont">&#xe6e0;</i>, text: '发现', route: '/find'},
  {id: 2, icon: <i className="iconfont">&#xe609;</i>, text: '视频', route: '/video'},
  {id: 3, icon: <i className="iconfont">&#xe63e;</i>, text: '我的', route: '/mine'},
  {id: 4, icon: <i className="iconfont">&#xe61a;</i>, text: '朋友', route: '/friend'},
  {id: 5, icon: <i className="iconfont">&#xe60b;</i>, text: '账号', route: '/acount'}
];

export default props => {
  return (
    <Nav>
      {NAV_SET.map(e => (
        <Link className="navitem" to={e.route} key={e.id}>
          <NavItem className={props.location.pathname === e.route ? 'active' : ''}>
            {e.icon}
            <i>{e.text}</i>
          </NavItem>
        </Link>
      ))}
    </Nav>
  );
};
