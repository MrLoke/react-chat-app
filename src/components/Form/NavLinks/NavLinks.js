import { NavLink } from 'react-router-dom'
import {
  NavLinksWrapper,
  NavLinkItem,
} from './NavLinksStyled'

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      <NavLink
        to='/login'
        style={{ textDecoration: 'none' }}
        activeStyle={{
          fontWeight: 'bold',
          borderBottom: '2px solid rgba(63, 81, 181)',
        }}>
        <NavLinkItem>Login</NavLinkItem>
      </NavLink>
      <NavLink
        to='/signup'
        style={{ textDecoration: 'none' }}
        activeStyle={{
          fontWeight: 'bold',
          borderBottom: '2px solid rgba(63, 81, 181)',
        }}>
        <NavLinkItem>Signup</NavLinkItem>
      </NavLink>
    </NavLinksWrapper>
  )
}

export default NavLinks
