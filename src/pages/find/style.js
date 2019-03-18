import styled from 'styled-components';

export const SearchInput = styled.input.attrs({placeholder: '猜你喜欢'})`
  width: 13rem;
  height: 30px;
  border-radius: 20px;
  padding: 0 20px;
`;

export const Navigation = styled.div`
  background: #d43c33;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
`;

export const NavigationItem = styled.div`
  height: 30px;
  color: #fff;
  line-height: 30px;
  font-size: 14px;
`;
