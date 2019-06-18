import React from 'react';


// styled components
import { FilterWrapper } from '../../styles/FilterBar.jsx';

const FilterBar = ({ searchChange, searchField }) => (
  <>
    <FilterWrapper>
      <input
        type="text"
        placeholder="filter actions by name..."
        onChange={searchChange}
        value={searchField}
      />
    </FilterWrapper>
  </>
);

export default FilterBar;
