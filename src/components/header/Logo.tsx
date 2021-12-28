import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const headerLogo = process.env.PUBLIC_URL + '/images/gobybus_logo.png';

const StyledLogo = styled.img`
  width: 200px;
`;

export const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <StyledLogo src={headerLogo} alt='GoByBus' />
    </Link>
  );
};
