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
  color: #fff;
  padding-bottom: 50px;
  text-shadow: 0 1px 5px #000;
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

// import img from '../../assets/images/searchbg.jpg'

// import myImage from '../../assets/images/searchbg.jpg';

// const headerLogo = process.env.PUBLIC_URL + '/images/gobybus_logo.png';

// const StyledLogo = styled.img`
//   width: 200px;
// `;
// <div>
//   <StyledLogo src={searchBg} alt='GoByBus' />
// </div>;

// -webkit-background-size: cover;
// -moz-background-size: cover;
// -o-background-size: cover;
// background-size: cover;

// const StyledLogo = styled.img`
//   width: 200px;
// `;

// {

// const searchbg = process.env.PUBLIC_URL + '/searchbg.jpg';
// const img = '../../assets/images/searchbg.jpg';

// const StyledSearchBar = styled.div`
//   width: 500px;
// `;

// export const SearchBar: React.FC = () => {
//   return;
//   <div>
//     <StyledLogo src={headerLogo} alt='GoByBus' />
//   </div>;
// };

// ========

// "bus-trip": "url('/src/assets/img/searchbg.jpg')",
// imgUrl={searchbg}
/* background-image: url(${(props) => props.searchbg}); */
/* background-image: url(${searchbg}); */
/* background-image: url(${'../../assets/images/searchbg.jpg'}); */
// background-image: ${(props) => `url(${require(`../images/${props.backgroundImage}`)})`
