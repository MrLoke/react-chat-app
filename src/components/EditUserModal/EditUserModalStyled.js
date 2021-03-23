import styled from 'styled-components/macro'
import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vh;
  height: 100vh;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  ${({ theme }) => theme.media.md} {
    width: 50vh;
    height: 50vh;
    border-radius: ${({ theme }) => theme.utils.mediumRadius};
  }
`

export const EditHeader = styled.h2`
  color: ${({ theme }) => theme.colors.light};
`

export const EditFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  padding-bottom: 2rem;
`

export const EditField = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
`

export const AddChannelInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  font-size: ${({ theme }) => theme.size.xs};
  margin-right: 1rem;
`

export const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primaryShade};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.xs};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  cursor: pointer;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.light};
  position: absolute;
  top: 4%;
  right: 5%;
  border: none;
  outline: none;
  cursor: pointer;
`

export const DeleteBtn = styled(ModalBtn)`
  background-color: ${({ theme }) => theme.colors.warning};
`
