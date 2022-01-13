import React from 'react';
import styled from 'styled-components';
import FilterRoutes from './FilterRoutes';
import SortRoutes from './SortRoutes';

interface Props {}

const StyledSidebar = styled.div`
  max-width: 200px;
  width: 100%;
  margin: 0 0.25rem 1rem 0.25rem;
`;

const Sidebar = (props: Props) => {
  return (
    <StyledSidebar>
      <SortRoutes />
      <FilterRoutes />
    </StyledSidebar>
  );
};

export default Sidebar;
