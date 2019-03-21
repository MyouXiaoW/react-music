import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Container from '../../common/container';
import Page from 'Common/page';
import Title from 'Common/title';
import {
  SearchInput,
  Navigation,
  NavigationItem,
  CarouselItem,
  Selection,
  Select,
  Time,
  Grid,
  GridTitle,
  GridItem,
  GridContent
} from './style';
import {Carousel} from 'antd-mobile';
import API from 'Servers/api';
import moment from 'moment';
class Find extends Component {
  componentDidMount() {
    API.getBanner().then(res => {
      console.error(res);
    });
  }
  render() {
    console.error();
    const dotStyle = {
      width: 5,
      height: 5,
      background: '#fff'
    };
    const dotActiveStyle = Object.assign({}, dotStyle, {background: 'red'});
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
          <Carousel
            autoplay //自动切换
            infinite //是否循环播放
            dots
            dotStyle={dotStyle}
            dotActiveStyle={dotActiveStyle}
            style={{
              position: 'absolute',
              top: 75
              // height: 0
            }}
          >
            <CarouselItem>
              <img src="http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="http://p1.music.126.net/B_xdKU0T6kctXce9FeS3Cw==/109951163935385847.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="http://p1.music.126.net/velihUqMviN4-mYPc2ochA==/109951163935384461.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              {' '}
              <img src="http://p1.music.126.net/lgssnTR2wiTrpvYeHjz0Dg==/109951163935389652.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="http://p1.music.126.net/lWJTUFnajqsOHR0pVKdvtg==/109951163934344738.jpg" alt="" />
            </CarouselItem>
          </Carousel>
          <Selection>
            <Link to="/">
              <Select>
                <i className="iconfont">&#xe689;</i>
              </Select>
            </Link>
            <Link to="/">
              <Select>
                <i className="iconfont" date={moment().date()}>
                  &#xe600;
                </i>

                <Time>
                  <em>{moment().date()}</em>
                </Time>
              </Select>
            </Link>
            <Link to="/">
              <Select>
                <i className="iconfont">&#xe780;</i>
              </Select>
            </Link>
            <Link to="/">
              <Select>
                <i className="iconfont">&#xe642;</i>
              </Select>
            </Link>
          </Selection>

          <Grid>
            <GridTitle>推荐</GridTitle>
            <GridContent>
              <GridItem>
                <img src="http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg" alt="" />
                <p>121212</p>
              </GridItem>
              <GridItem>
                <img src="http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg" alt="" />
                <p>121212</p>
              </GridItem>
              <GridItem>
                <img src="http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg" alt="" />
                <p>121212</p>
              </GridItem>
            </GridContent>
            <GridContent>
              <GridItem>
                <img src="http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg" alt="" />
                <p>121212</p>
              </GridItem>
              <GridItem>
                <img src="http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg" alt="" />
                <p>121212</p>
              </GridItem>
              <GridItem>
                <img src="http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg" alt="" />
                <p>121212</p>
              </GridItem>
            </GridContent>
          </Grid>
        </Page>
      </Fragment>
    );
  }
}

export default Container(Find);
