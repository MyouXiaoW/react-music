import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  height: 3rem;
  background: #fff;
  border-top: 1px solid #ddd;
  padding-top: 5px;
  .navitem {
    flex: 1;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #c0c0c0;
  i {
    font-size: 12px;
    &.iconfont {
      font-size: 24px;
    }
  }
  &.active {
    color: #d43c33;
  }
`;
