import styled from 'styled-components/macro'

export const FormItem = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
`

export const FormItemBar = styled.div`
  width: 100%;
  height: 2px;
  background: #7d7d7d;
  transition: 0.1s all;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: -1px;
  left: 5px;
  transition: 0.2s ease-out all;
  font-size: ${({ theme }) => theme.size.s};
  cursor: text;
`

export const InputField = styled.input`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.size.s};
  border: none;
  line-height: 24px;
  width: 100%;
  background: none;

  :focus {
    outline: none;
  }
  :focus + ${Label} {
    top: -24px;
    font-size: ${({ theme }) => theme.size.xs};
  }
  :not(:placeholder-shown) + ${Label} {
    top: -24px;
    font-size: ${({ theme }) => theme.size.xs};
  }
  :focus ~ ${FormItemBar} {
    background: ${({ theme }) => theme.colors.primary};
  }
`