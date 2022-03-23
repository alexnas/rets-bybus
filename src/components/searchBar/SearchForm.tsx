import React, { useState } from 'react';
import styled from 'styled-components';
import { CgArrowsExchange } from 'react-icons/cg';

import { StyledFlex } from '../../styles/Flex';
import { Container } from '../../styles/Container';
import { StyledButton } from '../../styles/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSearchParams } from '../../store/slices/searchSlice';
import { getRoutesAsync } from '../../store/slices/routesSlice';
import { createBusRouteEndpoint } from '../../api/createEndpoint';

interface Props {}

const StyledSeachForm = styled.form`
  background-color: ${({ theme }) => theme.colors.formBg};
  height: 50px;
  border-width: 1px;
  border: 1px solid gray;
  box-shadow: ${({ theme }) => theme.colors.searchShadow};
  border-radius: 5px;
  overflow: hidden;
  margin: 0 8px;
`;

const StyledInput = styled.input`
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  width: 33%;
  height: 48px;
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
  width: 48px;
  color: ${({ theme }) => theme.colors.mainLight};
  border: solid ${({ theme }) => theme.colors.borderLight};
  border-width: 0 4px 0 0;
  border-radius: 1rem;
  margin-bottom: 5px;
  opacity: 80%;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

const StyledSearchButton = styled(StyledButton)`
  margin-bottom: 10px;
`;

const StyledFormWrapper = styled(StyledFlex)`
  width: 100%;
`;

export const SearchForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const initStartCity = useAppSelector((state) => state.search.startCity);
  const initEndCity = useAppSelector((state) => state.search.endCity);
  const initCompany = useAppSelector((state) => state.search.company);
  const [startCity, setStartCity] = useState<string>(initStartCity);
  const [endCity, setEndCity] = useState<string>(initEndCity);
  const [company, setCompany] = useState<string>(initCompany);

  const exchangeFromAndTo = () => {
    const from = startCity;
    setStartCity(endCity);
    setEndCity(from);
  };

  const handleSubmitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchParams({ startCity, endCity, company }));
    const endpoint = createBusRouteEndpoint({ startCity, endCity, company });
    dispatch(getRoutesAsync(endpoint));
  };

  return (
    <Container>
      <StyledSeachForm onSubmit={handleSubmitSearchForm}>
        <StyledFlex>
          <StyledFormWrapper>
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
          </StyledFormWrapper>
          <StyledSearchButton>Find now</StyledSearchButton>
        </StyledFlex>
      </StyledSeachForm>
    </Container>
  );
};
