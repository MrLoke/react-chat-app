import styled from 'styled-components/macro'

export const ChatFeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.media.md} {
    width: 60%;
  }
  ${({ theme }) => theme.media.xl} {
    width: 65%;
  }
`

export const EmptyChannelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const EmptyChannelText = styled.h2`
  color: ${({ theme }) => theme.colors.light};
`

export const ChatMessageWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
`
