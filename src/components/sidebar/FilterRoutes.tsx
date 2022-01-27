import React from 'react';
import styled from 'styled-components';
import { StyledBaseTitle } from '../../styles/Filters';
import FilterByCompany from './FilterByCompany';
import FilterByEndCity from './FilterByEndCity';
import FilterByStartCity from './FilterByStartCity';
import FilterByStartTime from './FilterByStartTime';
import FilterByEndTime from './FilterByEndTime';
import FilterResetButton from './FilterResetButton';

const FilterWrapper = styled.div`
  margin-top: 20px;
`;

const FilterRoutes: React.FC = () => {
  return (
    <FilterWrapper>
      <StyledBaseTitle>
        <span>Filter</span>
      </StyledBaseTitle>
      <FilterByStartTime />
      <FilterByEndTime />
      <FilterByCompany />
      <FilterByStartCity />
      <FilterByEndCity />
      <FilterResetButton />
    </FilterWrapper>
  );
};

export default FilterRoutes;
