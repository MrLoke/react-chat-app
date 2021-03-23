import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { logout } from 'features/userSlice'
import { FiSave } from 'react-icons/fi'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { auth, db } from 'firebase-config'
import {
  StyledModal,
  EditHeader,
  EditFieldContainer,
  EditField,
  AddChannelInput,
  ModalBtn,
  CloseBtn,
  DeleteBtn,
} from './EditUserModalStyled'

const EditUserModal = ({ isEditUserOpen, closeEditUserModal }) => {
  const [isError, setIsError] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newProfileAvatar, setNewProfileAvatar] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleUpdateUsername = () => {
    db.collection('users')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => doc.ref.update({ displayName: newUsername }))
    auth.currentUser
      .updateProfile({
        displayName: newUsername,
      })
      .then(function () {})
      .catch((error) => setIsError(error))
  }

  const handleUpdateProfileAvatar = () => {
    db.collection('users')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => doc.ref.update({ photoURL: newProfileAvatar }))
    auth.currentUser
      .updateProfile({
        photoURL: newProfileAvatar,
      })
      .then(function () {})
      .catch((error) => setIsError(error))
  }

  const handleUpdateEmail = () => {
    auth.currentUser
      .updateEmail(newEmail)
      .then(function () {
        // Update successful.
      })
      .catch((error) => setIsError(error))
  }

  const handleUpdatePassword = () => {
    auth.currentUser
      .updatePassword(newPassword)
      .then(function () {
        // Update successful.
      })
      .catch((error) => setIsError(error))
  }

  const handleDeleteUser = () => {
    auth.currentUser
      .delete()
      .then(function () {
        // Update successful.
      })
      .catch((error) => setIsError(error))
    dispatch(logout())
    history.push('/login')
  }

  return (
    <StyledModal
      isOpen={isEditUserOpen}
      onBackgroundClick={closeEditUserModal}
      onEscapeKeydown={closeEditUserModal}>
      <EditHeader>Account settings</EditHeader>
      <EditFieldContainer>
        <EditField>
          <AddChannelInput
            type='text'
            placeholder='New username'
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <ModalBtn onClick={handleUpdateUsername}>
            <FiSave style={{ marginRight: '0.5rem' }} />
            Save
          </ModalBtn>
        </EditField>
        <EditField>
          <AddChannelInput
            type='email'
            placeholder='New email'
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <ModalBtn onClick={handleUpdateEmail}>
            <FiSave style={{ marginRight: '0.5rem' }} />
            Save
          </ModalBtn>
        </EditField>
        <EditField>
          <AddChannelInput
            type='password'
            placeholder='New password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <ModalBtn onClick={handleUpdatePassword}>
            <FiSave style={{ marginRight: '0.5rem' }} />
            Save
          </ModalBtn>
        </EditField>
        <EditField>
          <AddChannelInput
            type='text'
            placeholder='New profile url avatar'
            value={newProfileAvatar}
            onChange={(e) => setNewProfileAvatar(e.target.value)}
          />
          <ModalBtn onClick={handleUpdateProfileAvatar}>
            <FiSave style={{ marginRight: '0.5rem' }} />
            Save
          </ModalBtn>
        </EditField>
      </EditFieldContainer>
      {isError ? (
        <p>
          Something went wrong <br />
          {isError}
        </p>
      ) : null}
      <CloseBtn onClick={closeEditUserModal}>
        <IoCloseCircleOutline size='3.5rem' />
      </CloseBtn>
      <DeleteBtn onClick={handleDeleteUser}>
        <RiDeleteBin6Line style={{ marginRight: '0.5rem' }} />
        Delete account
      </DeleteBtn>
    </StyledModal>
  )
}

export default EditUserModal
