import styled from 'styled-components/macro'

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 15px;
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primaryShade};
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.size.s};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.weight.medium};
  padding-left: 10px;
`