import styled from 'styled-components/macro'

export const ChannelContainer = styled.div`
  padding: 20px 0;
  cursor: pointer;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`

export const ChannelName = styled.h3`
  color: ${({ theme }) => theme.colors.light};
`
