import { StyledModal, AddChannelInput, ModalBtn } from './AddChannelModalStyled'

const AddChannelModal = ({
  addChannelName,
  setAddChannelName,
  isModalOpen,
  closeModal,
  handleAddChannel,
}) => {
  return (
    <StyledModal
      isOpen={isModalOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}>
      <AddChannelInput
        type='text'
        value={addChannelName}
        placeholder='Add channel name'
        onChange={(e) => setAddChannelName(e.target.value)}
      />
      <ModalBtn onClick={handleAddChannel}>Add</ModalBtn>
      <ModalBtn onClick={closeModal}>Close</ModalBtn>
    </StyledModal>
  )
}

export default AddChannelModal
