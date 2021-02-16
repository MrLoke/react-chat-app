import styled from 'styled-components/macro'

export const UsersListContainer = styled.div`
  display: none;
  ${({ theme }) => theme.media.md} {
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const UserInfoHeader = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  padding: 15px;
  text-align: center;
`

// mobile 

export const MobileIcon = styled.div`
  position: absolute;
  top: 1.5%;
  right: 3%;
  z-index: 3;
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`

export const MobileUsersBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ isUsersListOpen }) =>
    isUsersListOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in;
  padding: 50px 0 20px 0;
  z-index: 2;
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`