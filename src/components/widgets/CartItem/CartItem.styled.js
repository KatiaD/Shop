import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CartContainer = styled.div`
    display:flex;
  img {
    display: block;
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
