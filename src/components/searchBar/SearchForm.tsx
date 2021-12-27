import React, { useState } from 'react';
import styled from 'styled-components';
import { CgArrowsExchange } from 'react-icons/cg';

import { Flex } from '../../styles/Flex';

interface Props {}

const StyledSeachForm = styled.form`
  background-color: ${({ theme }) => theme.colors.formBg};
  height: 50px;
  border-width: 1px;
  border: 2px solid gray;
  border-radius: 0.125rem;
  box-shadow: ${({ theme }) => theme.colors.searchShadow};
`;

const StyledInput = styled.input`
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  width: 40%;
  height: 46px;
  padding-left: 4px;
  margin-bottom: 10px;
  border: solid ${({ theme }) => theme.colors.borderLight};
  border-width: 0 4px 0 0;
  border-radius: 15px;
  :focus {
    outline: none;
  }
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.formSecBg};
  }
`;

const StyledArrorIcon = styled(CgArrowsExchange)`
  height: 46px;
  width: 3rem;
  color: ${({ theme }) => theme.colors.mainLight};
  border: solid ${({ theme }) => theme.colors.borderLight};
  border-width: 0 4px 0 0;
  border-radius: 15px;
  margin-bottom: 5px;
  opacity: 80%;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

const StyledSearchButton = styled.button`
  width: 9rem;
  height: 46px;
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  margin-bottom: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.headerBg};
  padding: 0;
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

export const SearchForm = (props: Props) => {
  const [startCity, setStartCity] = useState('startCityStore');
  const [endCity, setEndCity] = useState('endCityStore');
  const [company, setCompany] = useState('companyStore');

  const exchangeFromAndTo = () => {
    const from = startCity;
    setStartCity(endCity);
    setEndCity(from);
  };

  const handleSubmitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(
      'startCity, endCity, company =====',
      startCity,
      endCity,
      company
    );

    // history.push('routes');
  };

  return (
    <div>
      <StyledSeachForm onSubmit={handleSubmitSearchForm}>
        <Flex>
          <Flex>
            <StyledInput
              onChange={(e) => {
                setStartCity(e.target.value);
              }}
              type='text'
              placeholder='Departure city'
              value={startCity}
              list='start-city'
            />
            <div onClick={exchangeFromAndTo}>
              <StyledArrorIcon />
            </div>
            <StyledInput
              onChange={(e) => setEndCity(e.target.value)}
              type='text'
              placeholder='Arrival city'
              value={endCity}
              list='end-city'
            />
            <StyledInput
              onChange={(e) => setCompany(e.target.value)}
              type='text'
              placeholder='Company'
              value={company}
              list='company-options'
            />
          </Flex>
          <StyledSearchButton>Find now</StyledSearchButton>
        </Flex>
      </StyledSeachForm>
    </div>
  );
};
