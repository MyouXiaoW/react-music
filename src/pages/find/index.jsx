import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
import moment from 'moment';
class Find extends Component {
  componentDidMount() {
    const {getbanner, banner} = this.props;
    getbanner(banner);
  }
  render() {
    const {banner} = this.props;
    console.log(this.props);
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
            frameOverflow="none"
            dotStyle={dotStyle}
            dotActiveStyle={dotActiveStyle}
            style={{
              position: 'absolute',
              top: 75,
              height: '9rem',
              overflow: 'hidden'
            }}
          >
            {banner &&
              banner.map(e => (
                <CarouselItem key={e}>
                  <img width="22.5rem" height="9rem" src={e.imageUrl} alt="" />
                </CarouselItem>
              ))}
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

export default connect(
  state => ({banner: state.banner.banners}),
  (dispatch, ownProps) => {
    return {
      getbanner: banner => {
        if (!banner) {
          dispatch({type: 'request'});
        }
      }
    };
  }
)(Find);
