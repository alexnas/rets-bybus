import styled from 'styled-components';
import { Flex } from '../../styles/Flex';

export const StyledHeaderNav = styled.nav`
  align-items: center;
  display: flex;

  li {
    list-style-type: none;
    margin-left: 10px;
  }
`;

export const HeaderNav: React.FC = () => {
  return (
    <StyledHeaderNav>
      <ul>
        <Flex>
          <li>Companies</li>
          <li>Routes</li>
          <li>Support</li>
          <li>About</li>
        </Flex>
      </ul>
    </StyledHeaderNav>
  );
};
