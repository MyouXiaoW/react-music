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
  img {
    width: 22.5rem;
    height: 9rem;
    border-radius: 5px;
  }
`;

export const Selection = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  i {
    font-size: 1.7rem;
    ::after {
      content: ${props => 11};
    }
  }
`;
