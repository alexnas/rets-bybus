import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/gobybus_logo.png';

const StyledLogo = styled.img`
  width: 13rem;
  max-width: 13rem;
`;

export const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <StyledLogo src={logo} alt='GoByBus' />
    </Link>
  );
};
