import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductContainer = styled.div`
 width:25%;
  img {
    width: 280px;
    padding: 10px;
  }
`;

export const Price = styled.div`
  padding: 7px 7px 5px;
  color: #A40000;
  font-size: 14px;
  text-align: center;
  font-weight:bold
`;

export const Name = styled.div`
  color: black;
  font-size: 18px;
  text-align: center;
  font-family: monospace;
`;