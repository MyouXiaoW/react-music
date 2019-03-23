import styled from 'styled-components';

export const SearchInput = styled.input.attrs({placeholder: '猜你喜欢'})`
  width: 13rem;
  height: 30px;
  border-radius: 20px;
  padding: 0 20px;
`;

export const Navigation = styled.div`
  background: #d43c33;
  height: 9rem;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const NavigationItem = styled.div`
  height: 30px;
  color: #fff;
  line-height: 30px;
  font-size: 14px;
`;

export const CarouselItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 9rem;
  img {
    width: 22.5rem;
    height: 9rem;
    border-radius: 5px;
  }
`;

export const Selection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
  /* flex-direction: column; */
`;

export const Select = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #d43c33;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  position: relative;
  i {
    font-size: 1.7rem;
  }
`;
export const Time = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  em {
    display: block;
    padding-top: 5px;
    font-size: 0.4rem;
  }
`;

export const Grid = styled.div``;

export const GridTitle = styled.div`
  font-size: 16px;
`;

export const GridContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 5px;
`;

export const GridItem = styled.div`
  flex: 1;
  margin-right: 5px;
  margin-top: 5px;
  text-align: center;
  height: 100%;
  p {
    font-size: 12px;
  }
`;
