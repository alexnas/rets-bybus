import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { StyledFilterWrapper } from '../../styles/Filters';
import { selectFoundFilteredRoutesCount } from '../../utils/selectors/filterSelectors';

type Props = {};

const StyledFilterSummaryWrapper = styled(StyledFilterWrapper)`
  display: flex;
  justify-content: space-between;
`;

const FilterSummary = (props: Props) => {
  const { foundCount, filteredCount } = useAppSelector((state) =>
    selectFoundFilteredRoutesCount(state)
  );

  return (
    <>
      <StyledFilterSummaryWrapper>
        <div>Found: {foundCount}</div>
        <div>Filtered: {filteredCount}</div>
      </StyledFilterSummaryWrapper>
    </>
  );
};

export default FilterSummary;
