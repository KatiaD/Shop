import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  flex: 0 0 auto;
  background-color: black;
  padding-left: 80px;
`;

export const HeaderTitle = styled.h1`
  font-size: 14px;
  color: white;
  font-family: arial;
  font-weight: normal;
  text-transform: uppercase;
`;

export const Cart = styled.img`
  width: 14px;
`;

export const CartWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 10px;
  right: 20px;
  width: 60px;
`;

export const Total = styled.div`
  color: white;
  float: right;
  font-size: 10px;
`;