import React from 'react';
import styled from 'styled-components';
import RoutesList from '../routes/RoutesList';

interface Props {}

const StyledRoutesBlock = styled.div`
  width: 100%;
  margin: 0 0.25rem 1rem 0.25rem;
`;

const RoutesBlock = (props: Props) => {
  return (
    <StyledRoutesBlock>
      <RoutesList />
    </StyledRoutesBlock>
  );
};

export default RoutesBlock;
