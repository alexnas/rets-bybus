import React from 'react';
// import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
// import { getCompaniesAsync } from '../../store/slices/companiesSlice';
import { StyledCardBody, StyledCardList } from '../../styles/StyledCard';
import CompanyItem from './CompanyItem';

const CompaniesList: React.FC = () => {
  // const dispatch = useDispatch();
  const { companies, isLoading, error } = useAppSelector(
    (state) => state.companies
  );

  // useEffect(() => {
  //   dispatch(getCompaniesAsync());
  // }, [dispatch]);

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
