import { Link } from "react-router-dom"
import styled from 'styled-components/macro'

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  margin-top: 10px;
`

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>404 | Page not found</h1>
      <StyledLink to='/'>Back to chat</StyledLink>
    </NotFoundWrapper>
  )
}

export default NotFound
