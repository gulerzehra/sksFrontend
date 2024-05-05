import PropTypes from 'prop-types';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { SearchFrame } from './SearchComp-styled';

function SearchComp({ searchQuery, onChangeHandler }) {
  return (
    <SearchFrame>
      <HiMagnifyingGlass className="search-icon" />
      <input
        className="search"
        type="text"
        name="search"
        id="search"
        placeholder="Search Club"
        value={searchQuery}
        onChange={onChangeHandler}
      />
    </SearchFrame>
  );
}

SearchComp.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default SearchComp;
