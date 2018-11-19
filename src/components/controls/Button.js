import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
  'data-name': props => props.name
})`
  color: ${ ({theme: {colorAccent}}) => colorAccent };
  background-color: ${ ({theme: {colorDefault}}) => colorDefault };
  font-size: ${ ({theme: {fontSize}}) => fontSize + 'px' };
  width: ${ ({theme: {width}}) => width + 55 + 'px' };
  height: ${ ({theme: {height}}) => height + 5 + 'px' };
  :hover {
    color: ${ ({theme: {colorDefault}}) => colorDefault };
    background-color: ${ ({theme: {colorAccent}}) => colorAccent };
    border: 1px solid  ${ ({theme: {colorDefault}}) => colorDefault };
  }
  :focus {
    outline: none;
  }
`;

export default Button;