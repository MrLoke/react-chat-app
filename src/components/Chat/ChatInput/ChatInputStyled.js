import styled from 'styled-components/macro'

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px 0;
`

export const InputMessage = styled.input`
  width: 70%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.size.s};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryShade};
  outline: none;
`

export const AddFileContainer = styled.div`
  margin-right: 5px;
`

export const AddFileLabel = styled.label`
  cursor: pointer;
`

export const AddFileInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  display: none;
`

export const SendMessageBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 5px;
  cursor: pointer;
`