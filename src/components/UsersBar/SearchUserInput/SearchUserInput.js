import { AiOutlineSearch } from 'react-icons/ai'
import {
  SearchUserContainer,
  SearchInput,
  SearchIcon,
} from './SearchUserInputStyled'

const SearchUserInput = ({ setSearchingUser }) => {
  return (
    <SearchUserContainer>
      <SearchInput
        type='search'
        placeholder='Search user...'
        onChange={(e) => setSearchingUser(e.target.value.toLowerCase())}
      />
      <SearchIcon>
        <AiOutlineSearch size='2.5rem' color='#111' />
      </SearchIcon>
    </SearchUserContainer>
  )
}

export default SearchUserInput
