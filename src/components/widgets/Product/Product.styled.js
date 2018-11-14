import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductContainer = styled.div`
height: 300px;
width: 200px;
padding:  0 20px;
text-align: center;
background-color: white;
border: 1px solid #ededf4;
border-radius:5px;
margin: 5px;
  img {
    width: 200px;
    height: 200px;
    padding: 10px;

  }
`;
export const Price = styled.div`
  background: #fef2b8;
  border-radius: 4px;
  display: inline-block;
  padding: 7px 7px 5px;
  vertical-align: middle;
  margin-right: .5em;
  white-space: nowrap;
  border: 1px solid transparent;
  font-size: 14px;
`;

export const Name = styled.div`
  color: #212121;
  font-size: 14px;
  height: 30px;
  line-height: 15px;
  margin-bottom: 8px;
  overflow: hidden;
`;