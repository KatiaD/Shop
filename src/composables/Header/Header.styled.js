import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  flex: 0 0 auto;
  padding: 20px;
  background-color: #687685;
`;

export const HeaderTitle = styled.h1`
  font-size: 30px;
  color: white;
  font: 400 21px/21px Ubuntu,sans-serif;
`;

export const Cart = styled.img`
  width: 25px;
`;

export const CartWrapper = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 33px;
  right: 15px;
  width: 60px;
`;

export const Total = styled.div`
  color: white;
  float: right;
  margin: 2px;
`;