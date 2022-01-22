import React from 'react';
import styled from 'styled-components';
import { StyledBaseTitle } from '../../styles/Filters';
import FilterByCompany from './FilterByCompany';
import FilterByEndCity from './FilterByEndCity';
import FilterByStartCity from './FilterByStartCity';

interface Props {}

const FilterWrapper = styled.div`
  margin-top: 20px;
`;

const FilterRoutes = (props: Props) => {
  return (
    <FilterWrapper>
      <StyledBaseTitle>
        <span>Filter</span>
      </StyledBaseTitle>
      <FilterByCompany />
      <FilterByStartCity />
      <FilterByEndCity />
    </FilterWrapper>
  );
};

export default FilterRoutes;
