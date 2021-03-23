import styled from 'styled-components/macro'

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 15px;
  ${({ theme }) => theme.media.xl} {
    margin: 10px 0 10px 30px;
  }
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primaryShade};
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.s};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.weight.medium};
  padding-left: 10px;
`

export const UserStatus = styled.p`
  color: ${({ status, theme }) =>
    status === 'online' ? theme.colors.green : theme.colors.secondaryShade};
  font-size: ${({ theme }) => theme.size.xs};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.weight.medium};
  padding-left: 10px;
  ::first-letter {
    text-transform: uppercase;
  }
`
