import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
  'data-name': props => props.name
})`
  color: ${ ({theme: {colorDefault}}) => colorDefault };
  font-size: ${ ({theme: {fontSize}}) => fontSize + 'px' };
  justify-content: space-around;
`;

export default Button;