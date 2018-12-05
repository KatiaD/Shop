import styled from 'styled-components';

export const UserInfoWrap = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserInfoForm = styled.form.attrs({
  onSubmit: props => props.onSubmit,
})`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
