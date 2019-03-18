import styled from 'styled-components';

export const TitleBar = styled.div`
  height: 45px;
  background: #d43c33;
  overflow: hidden;
  color: #fff;
`;

export const TitleLeft = styled.div`
  width: 45px;
  color: #fff;
  float: left;
  text-align: center;
  .iconfont {
    font-size: 20px;
    line-height: 45px;
  }
`;

export const TitleRight = styled.div`
  width: 45px;
  float: right;
  height: 45px;
`;

export const TitleMiddle = styled.div`
  margin: 0 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
`;
