import styled from 'styled-components/macro'
import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  padding: 30px;
  opacity: 0.8;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.utils.mediumRadius};
`

export const AddChannelInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  font-size: ${({ theme }) => theme.size.xs};
  margin-bottom: 10px;
`

export const ModalBtn = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryShade};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.xs};
  border: none;
  outline: none;
  padding: 10px 0;
  margin: 5px 0;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  cursor: pointer;
`
