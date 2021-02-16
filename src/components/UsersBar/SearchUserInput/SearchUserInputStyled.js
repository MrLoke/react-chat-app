import styled from 'styled-components/macro'

export const SearchUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  position: relative;
`

export const SearchInput = styled.input`
  width: 90%;
  padding: 5px 10px;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.size.xs};
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  border: 2px solid ${({ theme }) => theme.colors.dark};
  outline: none;
`

export const SearchIcon = styled.div`
  position: absolute;
  right: 10%;
  top: 6%;
`
