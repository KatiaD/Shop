import styled from 'styled-components';

const FooterWrapper = styled.footer`
  flex: 0 0 auto;
  background-color: ${({ theme: { colorDefault } }) => colorDefault};
  padding: 10px;
  color: ${({ theme: { colorAccent } }) => colorAccent};
  font: 400 12px/12px Ubuntu,sans-serif;
  text-align:center;
`;

export default FooterWrapper;
