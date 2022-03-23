import React from 'react';
import { StyledCardTitle, StyledCardWrapper } from '../styles/StyledCard';

interface ICardProps {
  title: string;
}

const Card: React.FC<ICardProps> = ({ title, children }) => {
  return (
    <StyledCardWrapper>
      <StyledCardTitle>
        <h3>{title}</h3>
      </StyledCardTitle>
      {children}
    </StyledCardWrapper>
  );
};

export default Card;
