import styled from 'styled-components';

const ConfirmButton = styled.button.attrs({
  type: props => props.type,
  disabled: props => props.type,
})`
  margin-top: 25px;
  height: 40px;
  width: 360px;
  background-color: ${({ theme: { colorDefault } }) => colorDefault};
  color: ${({ theme: { colorAccent } }) => colorAccent};
  border: none;
  font-size: 18px;
  transition: line-height 0.5s ease;
  text-transform: uppercase;
  @media (max-width: 414px) {
    width: 310px;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
    outline: none;
    transition: line-height 0.5s ease;
  }

  :focus:-ms-input-placeholder {
    color: transparent;
    outline: none;
    transition: line-height 0.5s ease;
  }
  :focus {
    outline: none;
    transition: line-height 0.5s ease;
  }
  :hover {
    cursor: pointer;
    color: ${({ theme: { colorDefault } }) => colorDefault};
    background-color: ${({ theme: { colorAccent } }) => colorAccent};
    border: 1px solid ${({ theme: { colorDefault } }) => colorDefault};
  }
`;

export default ConfirmButton;
