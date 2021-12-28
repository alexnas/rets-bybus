import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.colors.mainLightHover};
  }
`;
