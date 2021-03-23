import styled from 'styled-components/macro'

export const ChannelsListContainer = styled.div`
  display: none;
  ${({ theme }) => theme.media.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 100vh;
    width: 25%;
    overflow-y: auto;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  ${({ theme }) => theme.media.xl} {
    width: 20%;
  }
`

export const AddChannel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 5px 0;
`

export const AddChannelText = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  padding-right: 10px;
`

// mobile 

export const MobileIcon = styled.div`
  position: absolute;
  top: 1.5%;
  left: 3%;
  z-index: 3;
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`

export const MobileChannelsBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 85%;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ isChannelsOpen }) =>
    isChannelsOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in;
  padding: 20px 0;
  z-index: 2;
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`