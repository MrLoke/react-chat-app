import styled from 'styled-components/macro'

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`

export const CurrentUserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 10px 0;
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primaryShade};
  border-radius: 50px;
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.weight.medium};
  padding-left: 10px;
`

export const UserAction = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
`

export const UserActionText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.s};
  padding-left: 10px;
`
