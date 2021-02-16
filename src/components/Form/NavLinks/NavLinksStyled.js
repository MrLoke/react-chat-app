import styled from 'styled-components/macro'

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.size.s};
  width: 40%;
  z-index: 3;
`

export const NavLinkItem = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  padding: 5px 0;
`