import styled from 'styled-components/macro'

export const ChatMessageWrapper = styled.div`
  display: flex;
  margin: 15px;
`

export const ChatMessageContainer = styled.div`
  display: flex;
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: 50px;
  cursor: pointer;
  margin-top: 5px;
  margin-right: 10px;
`

export const UserFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 90%;
  padding: 5px 15px 10px 15px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.primary};
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.secondaryShade};
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.weight.medium};
  padding-bottom: 5px;
`
export const UserMessage = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.s};
`
