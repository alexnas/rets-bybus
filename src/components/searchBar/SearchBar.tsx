import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../styles/Flex';
import { SearchForm } from './SearchForm';
const searchBg = process.env.PUBLIC_URL + '/images/searchbg.jpg';

const StyledSearchBar = styled(Flex)`
  background-image: url(${searchBg});
  background-size: cover;
  background-position: center;
  height: 180px;
`;

const SearchTitle = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.thirdLight};
  padding-bottom: 50px;
  text-shadow: 0 1px 5px ${({ theme }) => theme.colors.thirdDark};
`;

export const SearchBar: React.FC = () => {
  return (
    <div>
      <StyledSearchBar justify='center' direction='column'>
        <SearchTitle className='text-center'>
          Find your bus route to Cuenca
        </SearchTitle>
        <SearchForm />
      </StyledSearchBar>
    </div>
  );
};
