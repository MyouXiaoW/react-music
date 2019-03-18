import React, {Component, Fragment} from 'react';
import Container from '../../common/container';
import Page from 'Common/page';
import Title from 'Common/title';
import {SearchInput, Navigation, NavigationItem} from './style';
import {Carousel} from 'antd-mobile';
class Find extends Component {
  render() {
    return (
      <Fragment>
        <Title>
          <SearchInput />
        </Title>
        <Page>
          <Navigation>
            <NavigationItem>个性推荐</NavigationItem>
            <NavigationItem>主播电台</NavigationItem>
          </Navigation>
          <Carousel />
        </Page>
      </Fragment>
    );
  }
}

export default Container(Find);
