import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { StyledCardBody, StyledCardList } from '../../styles/StyledCard';
import CompanyItem from './CompanyItem';

const CompaniesList: React.FC = () => {
  const { companies, isLoading, error } = useAppSelector(
    (state) => state.companies
  );

  return (
    <StyledCardBody>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <StyledCardList>
        {companies.map((company) => (
          <CompanyItem key={company.id} company={company} />
        ))}
      </StyledCardList>
    </StyledCardBody>
  );
};

export default CompaniesList;
