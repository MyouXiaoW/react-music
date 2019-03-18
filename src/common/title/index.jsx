import React, {Component} from 'react';
import {TitleBar, TitleLeft, TitleRight, TitleMiddle} from './style';
export default class Title extends Component {
  render() {
    return (
      <TitleBar>
        <TitleLeft>
          <i className="iconfont">&#xe606;</i>
        </TitleLeft>
        <TitleRight>121</TitleRight>
        <TitleMiddle>{this.props.children}</TitleMiddle>
      </TitleBar>
    );
  }
}
