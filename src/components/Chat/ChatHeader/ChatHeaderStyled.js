import styled from 'styled-components/macro'

export const ChatHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`

export const ChatHeaderName = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  padding: 15px;
`