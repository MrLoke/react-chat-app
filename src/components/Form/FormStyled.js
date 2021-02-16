import styled from 'styled-components/macro'

// login form styles

export const LoginActions = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding-left: 5px;
`

export const RememberMe = styled.input`
  padding-left: 5px;
  cursor: pointer;
`

export const LabelCheckbox = styled.label`
  font-size: ${({ theme }) => theme.size.xs};
  cursor: pointer;
`

export const ForgotPassword = styled.p`
  font-size: ${({ theme }) => theme.size.xs};
  font-weight: 500;
  text-align: center;
  padding-bottom: 5px;
  a {
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
  }
`

// signup form styles

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  width: 500px;
  min-height: 100vh;
  padding: 40px 20px;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  ${({ theme }) => theme.media.sm} {
    border-radius: ${({ theme }) => theme.utils.mediumRadius};
  }
  ${({ theme }) => theme.media.md} {
    min-height: 80vh;
    border-radius: ${({ theme }) => theme.utils.mediumRadius};
  }
`

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2.5rem;
  ${({ theme }) => theme.media.md} {
    height: 250px;
  }
`

export const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  position: absolute;
  top: -290px;
  left: -200px;
  background: linear-gradient(
    58deg,
    ${({ theme }) => theme.colors.formPrimary} 20%,
    ${({ theme }) => theme.colors.formSecondary} 80%
  );
  ${({ theme }) => theme.media.md} {
    position: absolute;
    top: -290px;
    left: -240px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  ${({ theme }) => theme.media.sm} {
    width: 70%;
  }
  ${({ theme }) => theme.media.md} {
    width: 70%;
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15rem;
`

export const HeaderText = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.l};
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: 1.24;
  z-index: 10;
  margin: 0;
  &:nth-child(2) {
    padding-left: 30px;
  }
`

export const SmallText = styled.h5`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.weight.medium};
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.colors.warning};
  text-align: center;
  padding: 10px 0;
`

export const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  padding: 10px 0;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.formPrimary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.size.s};
  transition: all 0.2s linear;
`
