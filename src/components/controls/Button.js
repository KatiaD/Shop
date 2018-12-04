import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
  'data-name': props => props.name,
})`
  color: ${({ theme: { colorAccent } }) => colorAccent};
  background-color: ${({ theme: { colorDefault } }) => colorDefault};
  font-size: ${({ theme: { fontSize } }) => fontSize};
  width: ${({ theme: { width } }) => width};
  height: ${({ theme: { height } }) => height};
  :hover {
    color: ${({ theme: { colorDefault } }) => colorDefault};
    background-color: ${({ theme: { colorAccent } }) => colorAccent};
    border: 1px solid ${({ theme: { colorDefault } }) => colorDefault};
  }
  :focus {
    outline: none;
  }
`;

export default Button;
