import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { getCompaniesAsync } from '../../store/slices/companiesSlice';
import CompanyItem from './CompanyItem';

const CompaniesList: React.FC = () => {
  const dispatch = useDispatch();
  const { companies, isLoading, error } = useAppSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(getCompaniesAsync());
  }, [dispatch]);

  const StyledCompaniesList = styled.div`
    background-color: ${({ theme }) => theme.colors.formBg};
    border: 2px solid ${({ theme }) => theme.colors.borderLight};
    box-shadow: ${({ theme }) => theme.colors.asideBoxShadow};
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  `;

  const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.5rem;
    row-gap: 0.75rem;
  `;

  return (
    <StyledCompaniesList>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <StyledList>
        {companies.map((company) => {
          return <CompanyItem company={company} />;
        })}
      </StyledList>
    </StyledCompaniesList>
  );
};

export default CompaniesList;
