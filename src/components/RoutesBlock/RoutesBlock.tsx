import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

interface Props {}

const StyledRoutesBlock = styled.div`
  width: 100%;
  margin: 0 0.25rem 1rem 0.25rem;
`;

const RoutesBlock = (props: Props) => {
  return (
    <StyledRoutesBlock>
      <Card title='Your filtered routes'>
        <h4>YOUR ROUTES</h4>
      </Card>
      <h1>Routes Block</h1>
      <h4>Found routes table</h4>

      <p>Under Construction...</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        suscipit ab sit dolor eaque tenetur necessitatibus neque voluptatum!
        Asperiores, modi. +1-345-456-5656
      </p>
    </StyledRoutesBlock>
  );
};

export default RoutesBlock;
