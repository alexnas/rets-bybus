import React from 'react';
import styled from 'styled-components';
import { StyledBaseTitle } from '../../styles/Filters';
import FilterByCompany from './FilterByCompany';
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
    </FilterWrapper>
  );
};

export default FilterRoutes;
